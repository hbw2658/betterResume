//event handling below




var backgroundClose = document.querySelector('.fullWidthButton');
var wade = document.querySelector('.wade');

wade.addEventListener('click', function(){
    this.classList.remove('wade');
    this.classList.add('popupCol1');
    backgroundClose.classList.remove('hidden');
    $('.verticalrl').hide();
    $('.popupCol1 .content').show();
    $('#dates').addClass('engulf');
    $('.sectionHeader').addClass('engulf');   
})

backgroundClose.addEventListener('click', function() {
    wade.classList.remove('popupCol1');
    wade.classList.add('wade')
    this.classList.add('hidden');
    $('.verticalrl').show();
    $('#dates').toggleClass('engulf');
    $('.sectionHeader').toggleClass('engulf');
})



//Constructor for filling in bubble below

class Work {
    constructor(company, title, dates, description, skills) {
        this._company = company;
        this._title = title;
        this._dates = dates;
        this._description = description;
        this._skills = skills;
    }

    get company() {
        return this._company;
    }

    get title() {
        return this._title;
    }

    get dates() {
        return this._dates
    }

    get description() {
        return this._description;
    }
    
    get skills() {
        return this._skills;
    }
};

//col1
const wwi = new Work('Wade-Wade I LLC', 'Property Manager', 'June 2019 - Current', 'Lorem Ipsum Doler', 'Product Photography, Communication, Copywriting, Paralegal');
const johnMorse = new Work('John P. Morse', 'Web Developer', 'September 2018 - November 2018', 'Lorem Ipsum Doler', 'Wordpress Customization, HTML/CSS, PHP, UI/UX Design'); 
const natGas = new Work('September 2017 - July 2018')


//col2
const billingsley = new Work('Billingsley Glass Designs', 'Graphic Designer', 'April 2019 - June 2019', 'Lorem Ipsum Doler', 'Logo Design, Telecommuting, Iconography');
const maudSteinberg = new Work('Maud Steinberg', 'Graphic Designer', 'September 2018 - Januart 2019', 'Lorem Ipsum Doler', 'InDesign, Book Design, Editing, Proofreading, Patience, Illustrator, Publishing');

//col3
const steammill = new Work('Blacksburg Steam Mill', 'Graphic Designer', 'December 2018 - July 2019', 'Lorem Ipsum Doler', 'InDesign, Publishing, Illustrator, Iconography, Logo Design, HTML/CSS, Branding')
const meldMan = new Work('Meld Manufacturing', 'Graphic Designer', 'January 2018 - September 2019', 'Lorem Ipsum Doler', 'InDesign, Publishing, Illustrator, Photoshop, Layout Design, Product Photography, Video Production, Brand Identity')
const steammillOld = new Work('Blacksburg Steam Mill', 'Graphic Designer', 'January 2016 - August 2017', 'Lorem Ipsum Doler', 'InDesign, Publishing, Illustrator, Iconography, Logo Design, HTML/CSS, Branding')

//col4
const vaporwaveWorld = new Work('vaporwave.world', 'Designer', 'August 2019 - September 2019', 'Lorem Ipsum Doler', 'UI/UX Design, Web Development, HTML/CSS, JavaScript, Copywriting');
const aeroprobeCorp = new Work('Aeroprobe Corporation', 'Graphic Designer', 'September 2017 - September 2019', 'Lorem Ipsum Doler', 'InDesign, Publishing, Illustrator, Photoshop, Layout Design, Product Photography, Video Production, Branding');
const deliMart = new Work('Deli Mart Incorporated', 'Executive Assistant', 'January 2016 - May 2017','Lorem Ipsum Doler', 'skills');
