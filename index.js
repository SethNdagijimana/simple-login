const Template  = document.createElement('template');
template.innerHTML=`
<style>
.form_element--label{
    position: absolute;
    opacity: 0.8;
    z-index: 1;
    top: 50%;
    transform: translate(10px, -50%);
    transition: opacity .1s cubic-bezier(0, 0, 0, 0.3 ), transform .1s cubic-bezier(0, 0, 0, 0.3 );
}
.form-element input:invalid +label{
    color: #F00;
}
.form-element--error-message{
    position: absolute;
    font-size: .8rem;
    font-weight: 300;
    bottom: -16px;
    left: 10px;
    color: red;
    opacity: 0;
}

.form-element input:invalid ~ .form-element--error-message {
    opacity: 1;
}
.input-with-value + label, .form-element input:focus +label{
    transform: scale(.8) translate(10px, -150%)!important;
    transform-origin: top left;
    opacity: 0.6;

}
.form-element input[required] + label::after{
    content: "*";
    padding-left: 4px;
    color: red;
    font-size: 1rem;
}

.form-element label{
    position: absolute;
    opacity: 0.8;
    z-index: 1;
    top: 50%;
    transform: translate(10px, -50%);
    transition: opacity .1s cubic-bezier(0, 0, 0, 0.3 ), transform .1s cubic-bezier(0, 0, 0, 0.3 );
}


</style>


`;

class UserName extends HTMLInputElement{
    
    constructor(){

        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(Template.content.cloneNode(true));

        this.shadowRoot.querySelector('input').innerText = this.getAttribute('for');

    }
}

window.customElements.define('label-username', UserName);