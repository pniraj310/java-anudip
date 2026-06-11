package OOPS;

import java.util.Scanner;

public class UserDefinedDT {
    public static class Student{
        String name;
        int rno;
        double cgpa;
    }
    static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student s1 = new Student();
        s1.name = "Niraj";
        s1.rno = 45;
        s1.cgpa = 8.0;

        Student s2 = new Student();
        s2.name = "Niraj";
        s2.rno = sc.nextInt();
        s2.cgpa = 8.0;

        Student s3 = new Student();
        s3.name = "Niraj";
        s3.rno = 45;
        s3.cgpa = 8.0;

    }
}
