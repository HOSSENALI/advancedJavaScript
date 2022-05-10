const student = {
    first: 'John',
    last: 'Doe',
    links: {
        socials: {
            facebook: 'https://.facebook.com/',
            twitter: 'https://twitter.com/',
        }
    },
    web: {
        blog: 'https://hossenali.com',
    }
}

// const { socials}=student.links;
// const { facebook,twitter}=student.links.socials;
// const {first,last,links}=student;

const {first,last,links:{socials:{facebook,twitter}}}=student;
console.log(last);
console.log(facebook);
console.log(first);
