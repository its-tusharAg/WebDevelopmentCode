public class tst {
    public static int prime(int nm) {
        int cn = 0;
        for(int i=2; i<nm; i++){
            for(int j=2; j<i; j++){

            }
        }
    }
    public static int primeNm(int num) {
        int pre = 0;

        if (num == 1 || num == 2 || num == 3) {
            return 0;
        } else {
            for (int i = 4; i <= num; i++) {
                int coun = 0;
                for (int j = 2; j < i; j++) {
                    if(i%j ==0 ){
                        coun++;
                    }
                }
                if(coun == 2){
                        pre++;
                    }
            }
            return pre;
        }

    }

    public static void main(String[] args) {
        System.out.println(primeNm(6));
    }
}
