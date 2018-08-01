#include <iostream>
using namespace std;

int main() {

int n;

double fact=1
;
cout<<"\nEnter a number ";

cin>>n;

     if(n==0||n==1){

     fact=1;}

     else{

     for(int i=1;i<=n;i++){

     fact*=i;

     }
 }
 cout<<"\nFactorial"<<fact<<'\n';

    return 0;
}
