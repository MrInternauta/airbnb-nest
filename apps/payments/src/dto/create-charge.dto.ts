import Stripe from "stripe"

export class CreateChargeDto {
  card: Stripe.PaymentMethodCreateParams.Card1,
  charge: number
}
