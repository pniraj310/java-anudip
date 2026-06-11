package OOPS;
class Student{
    String name;
    private int rnumber;
    double cgpa;
     void print(){
        System.out.println(name+""+rnumber+""+cgpa);
    }
//    public void p(){
//        print();
//    }


}
public class PrivateKeyword {
    static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "niraj";
//        s.rnumber = 78;
        s1.cgpa = 6.30;
        s1.print();
        Student s2 = new Student();
        s2.print();


    }
}
