import React, { Component } from 'react';
import './App.css';
import president from './images/president_batc.jpg';
import secretary from './images/secertary_batc.jpg';
import treasurer from './images/tresurer_batc.jpg';


function HistoryText(){
    return (
        <div className="history">
            <h2>Our Story</h2>
            <p>In 1997 friends John Doe and Bill Harry competed in their first Triathlon.
                afer a few years in the sport they dcided to form a group with others in the Baltimore
                area that we also insterested in multi-sport events, and in 2003 the Baltimore Area
                Triathlon Club was born.Not only was BATC a training group, but over time turned into
                a soical group as well. The mission of the BATC is to provide tarining and race support to
                all of out memebers. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras eleifend molestie mauris, vel tempus est accumsan eu. Morbi suscipit vulputate velit ac
                hendrerit. Aliquam erat volutpat. Fusce porta mi vitae nunc scelerisque, ac maximus quam tristique.
                Nam auctor, turpis id accumsan ultrices, dui lorem eleifend nulla, id tincidunt risus mi sit amet ex.
                Proin sit amet libero a augue viverra gravida eget nec sem. Duis luctus porta luctus.<br/><br/>
                Suspendisse maximus ante dui, quis fermentum elit luctus in. Sed vulputate non libero quis
                ullamcorper. Nam in ligula elit. Vivamus mollis velit et ipsum tincidunt cursus.Cras
                tempus enim ultricies velit tincidunt dignissim. Ut id viverra enim, a mollis erat. Proin feugiat,
                dolor sit amet interdum mollis, velit lacus condimentum nunc, a rhoncus enim ex vel metus. <br/><br/>
                Nunc orci justo, viverra at lacinia sit amet, molestie nec arcu. Praesent sit amet sollicitudin
                ligula, vitae mollis tellus. Integer lacinia enim fermentum rutrum venenatis. Aenean tristique
                urna vitae orci bibendum pretium. Proin nec felis interdum, tempus dolor ut, ullamcorper metus.
                Donec tempor nisi sed nisi tincidunt consectetur. Pellentesque in viverra ligula. Nulla quis metus
                ut justo suscipit hendrerit. In hac habitasse platea dictumst. Sed vitae ullamcorper libero.</p>
        </div>
    )
}

function StaffBios(){
    return (
        <div className="bio">
            <h2>2017 BATC Board of Directors</h2>
            <StaffCard name="Luke Smith" title="President" image={president} />
            <StaffCard name="Katie Damaroda" title="Secretary" image={secretary} />
            <StaffCard name="Linda Anders" title="Treasurer" image={treasurer} />
        </div>
    )
}

function StaffCard(props) {
    return (
        <figure className="staff-card">
            <img className="staff-image" src={props.image} alt={props.name}/>
            <figcaption><strong>{props.name}</strong>{props.title}</figcaption>
        </figure>
    )
}

export default function About() {
    return (
        <div>
            <HistoryText/>
            <StaffBios/>
        </div>


    );
}