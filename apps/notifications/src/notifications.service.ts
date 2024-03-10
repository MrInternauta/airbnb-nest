import { Injectable } from '@nestjs/common';
import { NotifyEmailDto } from './dto/notify-email.dto';
import * as nodeMailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class NotificationsService {
  private readonly transport = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: this.configService.get('SMTP_USER'),
      clientId: this.configService.get('GOOGLE_OAUTH_CLIENT_ID'),
      clientSecret: this.configService.get('GOOGLE_OAUTH_CLIENT_SECRET'),
      refreshToken: this.configService.get('GOOGLE_OAUTH_REFRESH_TOKEN'),
    },
  });

  constructor(private readonly configService: ConfigService) {}

  async notifyEmail({ email, text }: NotifyEmailDto) {
    console.log(email);
    await this.transport.sendMail({
      from: this.configService.get('SMTP_USER'),
      to: email,
      subject: 'Sleepr Notification',
      text,
    });
  }
}
