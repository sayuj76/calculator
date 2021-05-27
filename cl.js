function oprater(f,s,b)
{
    var ff=parseInt(f);
    var ss=parseInt(s);
    if(b=='sum')
    {   
        return sum=ans+ff+ss;
        
    }
    else if(b=='mins')
    {
       return mins=ss-ff+ans;
    }
    else if(b=='mul')
    {  
        if(ans==0)
        {
      return  mul=ff*ss;
        }
        else{
            return mul=ans*ff;
        }
        
    }
    else if(b=='div')
    {
        if(ans==0)
        {
      return  div=ss/ff;
        }
        else{
            return div=ans/ff;
        }
    }
    else{
        return 'error';
    }
}
var tep=0;
var ans = 0;
var sum = 0;
var mins = 0;
var div = 0;
var mul = 0;
var n = '';
var m = '';
var f = '';
var s = '';
var o = 0;
var su = '';
var op = '';
var mis = 0;
var fix=0;
const btn1 = document.getElementById('bn1')
const btn2 = document.getElementById('bn2')
const btn3 = document.getElementById('bn3')
const btn4 = document.getElementById('bn4')
var scrn = document.getElementById('scrn')
btn1.addEventListener('click', (e) => {
    var ch = e.target.name;
    su = ch;
    if(ch=='ac')
    {
        n=0;
        m=0;
        ans=0;
        scrn.remove();
    }
    if (o == 0) {
        if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
            op = ch;
        }
        else {
            scrn.append(su);
            n = n + ch;
        }
    }

    if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
        op = ch;
        if(ch=='sum')
        {
            scrn.append('+');
        }
        else if(ch=='mins')
        {
            scrn.append('-');
        }
        else if(ch=='mul')
        {
            scrn.append('*');
        }
        else{
            scrn.append('/');
        }
       
        o = 3;
    }

    if (o == 3) {
        if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
            op = ch;
        }
        else {
            scrn.append(su);
            m = m + ch;
        }
    }

})

btn2.addEventListener('click', (e) => {
    var ch = e.target.name;
    su = ch;
    if (o == 0) {
        if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
            op = ch;
        }
        else {
            scrn.append(su);
            n = n + ch;
        }
    }

    if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div' || ch == 'eq') {

        op = ch;
        if(ch=='sum')
        {
            scrn.append('+');
        }
        else if(ch=='mins')
        {
            scrn.append('-');
        }
        else if(ch=='mul')
        {
            scrn.append('*');
        }
        else{
            scrn.append('/');
        }
        o = 3;
    }

    if (o == 3) {
        if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
            op = ch;
        }
        else {
            scrn.append(su);
            m = m + ch;
        }
    }
   


})

btn3.addEventListener('click', (e) => {
    var ch = e.target.name;
    su = ch;
    if (o == 0) {
        if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
            op = ch;
        }
        else {
            scrn.append(su);
            n = n + ch;
        }
    }

    if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
        op = ch;
        if(ch=='sum')
        {
            scrn.append('+');
        }
        else if(ch=='mins')
        {
            scrn.append('-');
        }
        else if(ch=='mul')
        {
            scrn.append('*');
        }
        else{
            scrn.append('/');
        }
        o = 3;
    }

    if (o == 3) {
        if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
            op = ch;
        }
        else {
            scrn.append(su);
            m = m + ch;
        }
    }
    


})

btn4.addEventListener('click', (e) => {
    var ch = e.target.name;
    su = ch;
    if (o == 0) {
        if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
            op = ch;
        }
        else {
            scrn.append(su);
            n = n + ch;
        }
    }

    if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div') {
        op = ch;
        o = 3;
    }

    if (o == 3) {
        if (ch == 'sum' || ch == 'mins' || ch == 'mul' || ch == 'div' || ch=='eq') {
            var lp= ch;
        }
        else {
            scrn.append(su);
            m = m + ch;
        }
    }

    if (ch == 'eq') {
        o=0;
        scrn.append('=')
        mis = oprater(m, n,op);
        ans=mis;
        scrn.append(mis);
        n=0;
        m=0;
    }
    

})

