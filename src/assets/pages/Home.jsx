import React, { useState } from 'react';
import './Home.css';
import Modal from './Modal';

import microsoft_office from '../images/microsoft_office.svg';
import cctv_cam from '../images/cctv_cam.svg';
import wrench_screwdriver from '../images/wrench_screwdriver.svg';
import network from '../images/network.svg';
import support_guy from '../images/support_guy.svg';
import web from '../images/web.svg';
import printer from '../images/printer.svg';
import cash_register from '../images/cash_register.svg';

const services = [
    { id: '1', img: microsoft_office, title: 'საოფისე პროგრამებისა და სხვადასხვა ფასიანი აპლიკაციების ჩაწერა', desc: { txt1: 'ჩვენი გუნდი გთავაზობთ ოპერაციული სისტემების სრულმასშტაბიან ინსტალაციას და კონფიგურაციას. დავაინსტალირებთ Windows-ს, Linux-სა და სხვა პოპულარულ სისტემებს, უზრუნველვყოფთ დრაივერების სისწორეს და უსაფრთხო განახლებას. თქვენი კომპიუტერები მუშაობას დაიწყებენ სრულად ოპტიმალურად, რაც ხელს შეუწყობს სამუშაო პროცესების შეუფერხებელ გაგრძელებას.', txt2: 'საოფისე პროგრამების ინსტალაცია და ტექნიკური მხარდაჭერა INOVIT გთავაზობთ თანამედროვე საოფისე პაკეტების (Microsoft Office, Outlook, Excel, Teams და სხვ.) დაყენებას, კონფიგურაციას და მომხმარებლის საჭიროებებზე მორგებულ მხარდაჭერას. ჩვენ დაგეხმარებით თქვენი ოფისის ავტომატიზაციაში და კომუნიკაციის გამარტივებაში, რაც გააუმჯობესებს გუნდის პროდუქტიულობას.' }, alt: 'Office software install' },
    { id: '2', img: wrench_screwdriver, title: 'IT აუთსორსინგი', desc: { txt1: 'ჩვენი სპეციალისტები დაგეხმარებიან სწორად შეარჩიოთ თქვენი საქმიანობისთვის შესაბამისი მოწყობილობები და გაგიწევენ სრულ ტექნიკურ მხარდაჭერას გაყიდვამდე და შემდგომშიც. გაყიდვის გარდა, INOVIT უზრუნველყოფს მოწყობილობების ინსტალაციას, კონფიგურაციას და მომწესრიგებელ მომსახურებას, რაც მნიშვნელოვნად ამარტივებს თქვენს სამუშაო პროცესს.', txt2: '' }, alt: 'IT Outsourcing' },
    { id: '3', img: printer, title: 'პერიფერიული მოწყობილობების ინსტალაცია და მონტაჟი', desc: { txt1: '', txt2: '' }, alt: 'Peripheral install' },
    { id: '4', img: support_guy, title: 'ტექნიკური მხარდაჭერა', desc: { txt1: 'ჩვენი სერვისები შეიძლება ითვალისწინებდეს როგორც ერთჯერად სამუშაოებს, ასევე უწყვეტ ტექნიკურ მხარდაჭერას, რასაც უზრუნველყოფს ჩვენი პროფესიონალი გუნდი სწრაფი და ხარისხიანი მომსახურებით. INOVIT-ის მიზანია თქვენი ბიზნესის ეფექტიანობის გაზრდა და ტექნოლოგიური პროცესი მაქსიმალურად გამარტივება.', txt2: '' }, alt: 'Technical Support' },
    { id: '5', img: cctv_cam, title: 'სამეთვალყურეო კამერების ინსტალაცია და კონფიგურაცია', desc: { txt1: 'INOVIT უზრუნველყოფს სამეთვალყურეო სისტემების სრულ ჩამონტაჟებას, ნეტვორქის სწორ კონფიგურაციას და დისტანციურ წვდომას. ჩვენ დაგეხმარებით თქვენი სივრცის მაქსიმალურ უსაფრთხოებაში, უმაღლესი ხარისხის კამერებისა და თანამედროვე პროგრამული უზრუნველყოფის გამოყენებით.', txt2: '' }, alt: 'Camera Installation' },
    { id: '6', img: network, title: 'ქსელური ინფრასტრუქტურა', desc: { txt1: '', txt2: '' }, alt: 'Networking' },
    { id: '7', img: web, title: 'ვებ და ციფრული სერვისები', desc: { txt1: '', txt2: '' }, alt: 'Web & Digital Services' },
    { id: '8', img: cash_register, title: 'სავაჭრო მოწყობილობების, სალარო მოწყობილობების, ელ.სასწორების კონფიგურაცია', desc: { txt1: 'გთავაზობთ მაღაზიათა, კაფეებისა და სხვა სავაჭრო ობიექტების მოწყობილობების მონტაჟს და სისტემურ მხარდაჭერას. ეს მოიცავს POS ტერმინალებს, ბარკოდ სკანერებს, ფისკალურ რეგისტრატორებს და სხვა საჭირო ტექნიკას, რაც ხელს შეუწყობს თქვენს ბიზნესს ეფექტურად ფუნქციონირებაში.', txt2: 'ჩვენი სერვისი მოიცავს სხვადასხვა სპეციალური პროგრამული პაკეტების დაყენებას და კონფიგურაციას, როგორიცაა POS სისტემები, 1C, ანტივირუსული პროგრამები და სხვა ინდივიდუალური საჭიროების პროგრამები. ჩვენი მიზანია უზრუნველვყოთ თქვენი ბიზნესის ოპერაციების უწყვეტობა და უსაფრთხოება თანამედროვე ტექნოლოგიების მეშვეობით.' }, alt: 'Retail Devices' },
];

export default function Services() {
    const [active, setActive] = useState(null);

    return (
        <section className="services_section">
            <h2 className="services_header">INOVIT - ინოვაციური IT მხარდაჭერა</h2>
            <div className="services_cards">
                {services.map(svc => (
                    <div
                        key={svc.id}
                        className="service_card"
                        onClick={() => setActive(svc)}
                    >
                        <img src={svc.img} alt={svc.alt} className="service_card_img" />
                        <p className="service_card_title">{svc.title}</p>
                    </div>
                ))}
            </div>
            {active && (
                <Modal onClose={() => setActive(null)}>
                    <div className="modal_img"><img src={active.img} alt={active.alt} /></div>
                    <h3>{active.title}</h3>
                    <p>{active.desc.txt1}</p>
                    <p className='txt2'>{active.desc.txt2}</p>
                </Modal>
            )}
        </section>
    );
}
