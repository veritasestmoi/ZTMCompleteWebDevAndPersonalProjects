#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;
 
int a[35];
 
//【方法1】排序後取中間那一個。
int median(int i){
    int b[3] = {a[i-1], a[i-2], a[i-3]};
    sort(b, b+3);
    return b[1];
}
 
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    int n;
    while (cin >> n){
        for (int i=0; i<n; i++){
            cin >> a[i];
        }
        for (int i=3; i<n; i++){
            if (abs(a[i] - a[i-1]) < 5) continue;
            a[i] = median(i);
        }
        for (int i=0; i<n; i++)
            cout << a[i] << ' ';
        cout << '\n';
    }
 
    return 0;
}
