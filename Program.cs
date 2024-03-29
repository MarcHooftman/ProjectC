using API;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<AntesContext>();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("https://localhost:44463", "http://localhost", "https://antesonboarding.vercel.app")
            .WithHeaders("Content-Type", "ngrok-skip-browser-warning")
            .WithMethods("GET", "PUT", "POST", "DELETE", "OPTIONS")
            .AllowCredentials();
    });
});


var app = builder.Build();
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// app.Use(async (context, next) =>
// {
//     context.Response.Headers.Add("Access-Control-Allow-Origin", "https://localhost:44463");
//     context.Response.Headers.Add("Access-Control-Allow-Origin", "https://antesonboarding.vercel.app");
//     context.Response.Headers.Add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE, OPTIONS");
//     context.Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");
//     await next.Invoke();
// });

app.Use(async (context, next) =>
{
    Console.WriteLine($"{context.Request.Path} {context.Request.Method}");
    await next.Invoke();
});
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors();


app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
app.MapFallbackToFile("index.html");
// Seed the database
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<AntesContext>();
        Seeder.Initialize(context);
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while seeding the database.");
    }
}
app.Run();