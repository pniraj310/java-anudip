package Basic_Cheeze;

import java.util.Scanner;

public class AreaOfCircle {
    static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Radius: ");
        double r = sc.nextInt();
        double pi = 3.14159;
        double Area;
        Area = pi * r * r ;
        System.out.println("The Are of circle is : " + Area);
    }
}
