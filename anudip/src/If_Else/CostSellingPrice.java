package If_Else;

import java.util.Scanner;

public class CostSellingPrice {
    static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the cost price : ");
        double c = sc.nextDouble();
        System.out.print("Enter the Selling Price : ");
        double s = sc.nextDouble();
        double per;
        if(s>c){
            double profit = s - c;
            System.out.println("The seller is in profit with: "+profit);
            per = (profit/c)*100;
            System.out.println("and the seller has profit "+ per + " profit");
        } else if (s<c) {
            double loss = c - s;
            System.out.println("The seller is in loss :" + loss);
            per = (loss/c)*100;
            System.out.println("and the seller has loss "+ per );

        }
        else{

            System.out.println("The seller is not in profit not in loss: "+(c-s));

        }

    }
}
