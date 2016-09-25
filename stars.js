//  Good day!
//  For a more or less detailed explanation please visit https://www.youtube.com/channel/UC4-v9dnb-HwN19ztA8vSgAw
const row = function(n,spacecount)
{
    if(spacecount<=0)
    {
        if (n <= 0)
            return ' ';
        return ('*' + row(n-1,spacecount));
    }
    return (' ' + row(n,spacecount-1));
}
const  column= function(n,starperrow,i,spacecount)
{
    if(!(i<=n))
        return;
    console.log(row(starperrow,spacecount));
    column(n,starperrow+2,i+1,spacecount-1);
}
const triangleStars = function(n)
{ column(n,1,1,n-1); }
/*
    the column function
    n => the amount of lines the tree will have
    1 => the starting value for the amount of stars per row, will be incremented by two, after each run
    1 => this value will be incremented until it reaches n, then the function stops
    n-1 => how many spaces should be present at the beginning of the tree

    the row function
    n => how many times the function should print stars
    spacecount => how many times should tbe function print spaces, before it starts printing the stars

 */
triangleStars(5);














/*
 Chained and shadowed to be left behind
 nine and one thousand
 Metal militia for your sacrifice
 iron clad soldiers
 Join or be conquered the law of the land
 What will befall you
 The metallization of your inner soul
 twisting and turning
 */