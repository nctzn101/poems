poem1 = `
- watered 
 - even 
  - when i understood that even
 - regularly watered
- gardens wither.

- i made a point.
 - i made a point to stay on 
 - call.
  - call 
  - just in case. 
    - just in case there are
    - signs 
     - sudden signs
    - of drought.
  
- i will sprint.
 - should they burn, i will sprint.
- i 
 - but i
- am a company of one.
- i have buckets.
 - and all i have are 
 - buckets
  - overflowing buckets
   - buckets of care
 
- take time.
 - when i burn 
 - take time.
  - i hope you take time to
   - i hope you take time out of your busy to
- bring me a
- glass.
 - glass of water.
  



 `;

poem2 = `- I've never been  
- to Vermont
- so I never 
- dressed for it.
 - packed 
 - my 
 - jacket.
  - oversized jacket.
   - oversized plaid jacket.
    - oversized pumpkin-shade plaid jacket.
- when 
 - but when
- I go to Vermont,
 - I'll pack
  - I'll first buy
 - a jacket.
  - an oversized jacket.
   - an oversized plaid jacket.
    - an oversized pumpkin-shade plaid jacket.
- when 
 - honeycrisp in
 - one hand
  - one hand, the other out
- sensing
- the breeze, 
- I will realize I 
- had already been.
 - had been to Vermont. 
  - had been to Vermont every fall.
   - had been to Vermont for decades, every fall.
   
   `;

poem3 = `
- make 
 - you can make 
- a
- pillow
 - snug pillow
- on
- the road
 - any road
- you pick
- feathers 
 - the right feathers
- from.
`;
poems = {
  firefighter: poem1,
  thefullexperience: poem2,
  tomakeahome: poem3,
};

function renderPoem(title) {
  const telescopicPoem = document.getElementById("telescopicPoem");
  telescopicPoem.replaceChildren();

  const node = createTelescopicTextFromBulletedList(poems[title], {
    separator: " ",
    textMode: "text",
  });

  telescopicPoem.appendChild(node);
}
