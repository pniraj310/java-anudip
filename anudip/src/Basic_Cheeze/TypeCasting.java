package Basic_Cheeze;

public class TypeCasting {
    static void main(String[] args) {
        //type - ek data tpe se dusre data type me convesion
        char ch = 'A';
        int x = ch;  //implicit typecasting
        System.out.println(x);

        char piyush = 'a';
        int y = (int)piyush; // explicit typecasting
        System.out.println(y);

        char harsh = '3';
        System.out.println((int)harsh);
        char ch1 = 'b';
        System.out.println(ch1*ch1);

        //integer to character
        int x1 = 352;
        char ch2 = (char)x1;
        System.out.println(ch2);

    }
}
