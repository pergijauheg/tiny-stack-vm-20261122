import{mkdirSync as k,readdirSync as d,readFileSync as f,writeFileSync as w}from'node:fs'
let T='!2b%\'+,0qqqqqqqq*******&***&***q***qqqqqqqqqqqqqAEEA!qqqqqqqqqqq&)qqqqqqqqqqqqqq%%"%'
let Y="a+b;a-b;Math.imul(a,b);a/b;a%b;A/B;A%B;0;a&b;a|b;a^b;0;a<<k;a>>k;a>>>k;0;a==b;a<b;A<B".split(";")
let run=(p,g)=>{
let n=p.length,D=new Int32Array(256),s=0,C=D.slice(0,64),c=0,M=D.slice(),o=new Uint8Array(65536),l=0,i=0,x=0,t=0,E=e=>[o.slice(0,l),e]
for(;;){
if(t==1e6||x<0||x>=n)return E(9+(t==1e6))
let v=p[x],q=T.charCodeAt(v)-33
if(q>79|v>83)return E(5)
let m=q>>4,u=q>>2&3,h=q&3
if(x+m>=n)return E(9)
t++
x+=1+m
if(s<u||s-u+h>256)return E(s<u?2:3)
if(v<8){
if(!v)return E(0)
if(v<3)D[s++]=v==1?p[x-1]<<24>>24:p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24
else if(v==3)s--
else if(v==4||v==6)D[s]=D[s-1-(v>>1&1)],s++
else if(v==5)[D[s-1],D[s-2]]=[D[s-2],D[s-1]]
else[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]]
}else if(v<35){
if(v==23||v==27)D[s-1]=-D[s-1]-(v==27)
else{
let b=D[s-1],a=D[s-2],A=a>>>0,B=b>>>0,k=b&31
if(v>18&&v<23&&!b)return E(4)
D[s-=2]=eval(Y[v-16])
s++
}
}else if(v<53){
let e=(p[x-2]|p[x-1]<<8)<<16>>16
if(v==48)x+=e
else if(v==51){if(c==64)return E(7);C[c++]=x;x=e&65535}
else if(v==52){if(!c)return E(8);x=C[--c]}
else if((v==49)==!D[--s])x+=e
}else if(v<66){
let a=D[s-1]
if(a&~255)return E(6)
if(v==64)D[s-1]=M[a]
else s-=2,M[a]=D[s]
}else{
if(v==80){let z=''+D[s-1];if(l+z.length>>16)return E(11);s--;for(let j of z)o[l++]=j.charCodeAt(0)}
else if(v==81){if(l>>16)return E(11);o[l++]=D[--s]&255}
else if(v==82)D[s++]=i<g.length?g[i++]:-1
else return E(D[--s]&255)
}
}
}
let{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env
for(let i of d(I)){
let a=I+'/'+i,c=O+'/'+i,r=run(f(a+'/program.bin'),f(a+'/input.bin'))
k(c,{recursive:true})
w(c+'/stdout.bin',r[0])
w(c+'/exit.txt',r[1]+'\n')
}
