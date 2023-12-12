using System;
using System.Net;
using System.Net.Mail;


static class MailSender
{
    static private readonly string _senderMail = "antesonboarding@gmail.com";
    static private readonly string _senderPassword = "xoch mgku bhiv kpgg";
    static private SmtpClient GetSmtpClient()
    {
        SmtpClient smtpClient = new() {
            Host = "smtp.gmail.com",
            Port = 587,
            Credentials = new NetworkCredential(_senderMail, _senderPassword),
            UseDefaultCredentials = false,
            EnableSsl = true
        };
        return smtpClient;
    }

    static private MailMessage CreateMailMessage(string recipient, string subject, string body, IEnumerable<string> attachments)
    {
        MailMessage message = new MailMessage();
        message.From = new MailAddress(_senderMail);
        message.To.Add(new MailAddress(recipient));
        message.Subject = subject;
        message.Body = body;
        if (body.StartsWith("<html>") || body.StartsWith("<!DOCTYPE html>")) message.IsBodyHtml = true;

        foreach (string attachmentPath in attachments)
        {
            Attachment attachment = new Attachment(attachmentPath);
            message.Attachments.Add(attachment);
        }

        return message;
    }

    static private void SendMailMessage(MailMessage message)
    {
        try
        {
            GetSmtpClient().Send(message);
        }
        catch (SmtpException ex)
        {
            Console.WriteLine("Failed to send email: " + ex.StatusCode);
        }
        catch (IOException ex)
        {
            Console.WriteLine("Failed to add attachment to email: " + ex.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine("An error occurred: " + ex.Message);
        }
    }

    static public void SendMail(string recipient, string subject, string body)
    {
        MailMessage message = CreateMailMessage(recipient, subject, body, new List<string>());
        SendMailMessage(message);
    }

    static public void SendMail(string recipient, string subject, string body, IEnumerable<string> attachments)
    {
        MailMessage message = CreateMailMessage(recipient, subject, body, attachments);
        SendMailMessage(message);
    }
}