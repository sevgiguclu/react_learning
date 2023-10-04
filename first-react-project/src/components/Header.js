

function Header({number,type}) {
    // birden fazla props alabiliriz
    var style;
    var style1 = {
        textAlign:'center',
        backgroundColor:'#f96256',
        color:'black',
        margin:'10px',
        padding:'10px'
    }
    var style2 = {
        textAlign:'center',
        backgroundColor:'#541256',
        color:'white',
        margin:'10px',
        padding:'10px'
    }
    console.log(number,'number');
    if(number == '1'){
        style = style1;
    }
    if(number == '2'){
        style = style2;
    }
    return (
        <div style={style}>
            <div>Header  Bölümü {number}</div>
            <div>Reklam {type}</div>
        </div>
    );
  }
  
  export default Header;
  