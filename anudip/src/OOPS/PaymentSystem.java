package OOPS;

public class PaymentSystem {

    // static — tabhi main access kar payega
    static abstract class Payment {
        String name;

        Payment(String name) {
            this.name = name;
        }

        abstract void pay(double amount);

        void receipt() {
            System.out.println("Payment by: " + name);
        }
    }

    static class CreditCard extends Payment {
        CreditCard() {
            super("Credit Card");
        }

        @Override
        void pay(double amount) {
            System.out.println("Paid ₹" + amount +
                    " via Credit Card");
        }
    }

    static class UPI extends Payment {
        UPI() {
            super("UPI");
        }

        @Override
        void pay(double amount) {
            System.out.println("Paid ₹" + amount +
                    " via UPI");
        }
    }

    static class Cash extends Payment {
        Cash() {
            super("Cash");
        }

        @Override
        void pay(double amount) {
            System.out.println("Paid ₹" + amount +
                    " via Cash");
        }
    }

    // main — directly inside PaymentSystem
    public static void main(String[] args) {

        Payment[] payments = new Payment[3];
        payments[0] = new CreditCard();
        payments[1] = new UPI();
        payments[2] = new Cash();

        for (Payment p : payments) {
            p.pay(500.00);
            p.receipt();
            System.out.println("---");
        }
    }
}