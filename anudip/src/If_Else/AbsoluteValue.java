package If_Else;

import java.util.Scanner;

public class AbsoluteValue {
    static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number : ");
        int n = sc.nextInt();
        if(n < 0) n = -n;
        System.out.print("if the number is negative then the positive of it is: "+ n);
//        {
//            System.out.print("The positive of absolute number is : "+n);
//        }
//        else
//        {
//            System.out.println("The number was -n and its abosoulte value is : "+ -n);
//        }

    }
}
