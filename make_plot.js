    
function makePlot() {
    d3.csv( "data.csv" )
        .then( function( data ) {
            console.log(data[0]);
            console.log(data[5]);
            d3.select( "svg" )
                .selectAll( "circle" )
                .data( data )
                .enter()
                .append( "circle" )
                .attr( "r", 5 ).attr( "fill", "red" )
                .attr( "cx", function(d) { return d["x"] } )
                .attr( "cy", function(d) { return d["y"] } );
        } );
}
