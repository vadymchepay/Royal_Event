var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    filename: "_smart-grid",
    outputStyle: 'scss',
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    oldSizeStyle: false,
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1170px', /* max-width Ð¾n very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        xl: {
            width: '1920px', 
        },   
        lg: {
            width: '1200px', 
        },
        
        md: {
            width: '960px',
            fields: '15px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        }, 
        xs: {
            width: '560px',
            fields: '15px'
        }
    }
};
 

smartgrid('./src/precss', settings);