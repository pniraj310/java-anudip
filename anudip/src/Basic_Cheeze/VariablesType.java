package Basic_Cheeze;

class Student {

    // Instance Variable
    String name;
    int age;

    // Static Variable
    static String college = "GVAIET";

    void show() {

        // Local Variable
        int marks = 95;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);
        System.out.println("College: " + college);
    }
}

public class VariablesType{
    public static void main(String[] args) {

        Student s1 = new Student();
        s1.name = "Niraj";
        s1.age = 21;
        s1.show();

        System.out.println("---");

        Student s2 = new Student();
        s2.name = "Rahul";
        s2.age = 20;
        s2.show();

        // Static — class level
        System.out.println(Student.college);
    }
}
