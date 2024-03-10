import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { CreateChargeDto } from '@app/common';
import { NOTIFICATIONS_SERVICE } from '@app/common/constants';
import { ClientProxy } from '@nestjs/microservices';
import { PaymentCreateChargeDto } from './dto/payments-create-charge.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2023-10-16',
    },
  );

  constructor(
    private readonly configService: ConfigService,
    @Inject(NOTIFICATIONS_SERVICE)
    private readonly notificationService: ClientProxy,
  ) {}

  async createCharge({ amount, email }: PaymentCreateChargeDto) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: amount * 100,
      confirm: true,
      currency: 'usd',
      payment_method: 'pm_card_visa',
      // Disable `return_url` must be specified because this Payment Intent is configured to automatically accept the paymen
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
    });
    this.notificationService.emit('notify_email', {
      email,
      text: `Your payment of $${amount * 100} has completed successfully`,
    });
    return paymentIntent;
  }
}
