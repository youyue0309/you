#include<bits/stdc++.h>
#define MAX 1000

using namespace std;

int arr[MAX][MAX];
int m,n;

int roundx[4]={1,0,0,-1};
int roundy[4]={0,1,-1,0};
int check(int x,int y){//判断搜索到的位置是否合理
    return x>=0 && y>=0 && x<n && y<m;
}
int dfs(int x, int y){
    int i,res=1;
    arr[x][y] = 0;
    for(i=0;i<4;i++){
        int xx = x+roundx[i];
        int yy = y+roundy[i];
        if(check(xx,yy) && arr[xx][yy] == 1)
            res += dfs(xx,yy);
    }
    return res;
}
int main()
{
    while(cin>>m>>n){
        int i,j,res,maxans=0;
        for(int i=0;i<m;i++){
            for(int j =0;j<n;j++){
                cin>>arr[i][j];
            }
        }
        for(int i=0;i<m;i++)
            for(int j=0;j<n;j++)
                if(arr[i][j]==1){
                    res = dfs(i,j);
                    maxans=maxans>res?maxans:res;
                }
        cout<<maxans<<endl;
    }
    return 0;
}
/*
4 4
0 0 1 1
0 0 1 1
1 0 1 0
1 0 0 0
*/