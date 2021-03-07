This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Portfolio Jorge Van de Sompel

### First principles

This is my new portfolio! It is highly minimalistic in terms of design: black and white, lots of whitespace, and minimal special fx. The project itself was built in Next.js with TypeScript and TailwindCSS. Next.js provides out of the box SSR, which among other things is great for SEO as all the rendered HTML is displayed in the page source, allowing for easier and faster indexing. 

![Custom tools right out of the box](https://user-images.githubusercontent.com/54646908/110256852-68cf3300-7f9b-11eb-81cc-ecba1fa581cb.png)
###### Custom tools right out of the box :wrench:


### TypeScript

TypeScript provides a great real time debugging tool in the form of lots of bright red messages and linting that will scream at you for missing commas, semicolons, or failing to write out the import statement in 200ms. Thanks, TypeScript.

![The more red, the lower my confidence levels](https://user-images.githubusercontent.com/54646908/110256850-68369c80-7f9b-11eb-9199-3a0dabb73020.png)
###### The more red, the lower my confidence levels :chart_with_downwards_trend:


### TailwindCSS

TailwindCSS is a great styling tool, admittedly with some initial setup. The official docs and some strong programming knowledge are your best friends here. Every project comes with a postcss.config file, as well as a tailwind.config file. The former is used to config PostCSS, of course, and the latter to config Tailwind, shockingly. Incorrect information in either will break Tailwind and require you to debug until you get it right.

In this project, I learned how to successfully purge unused styles. Purging speeds up page loads and, in retrospect, is a fairly trivial process. PostCSS has custom purge functionality to help rid your project of unused styles that you either forgot to remove or didn't know were not actually styling the page at all. However, Tailwind also provides purging options out of the box, so I went with those instead. Additionally, the built in purge also gets rid of the out of the box utility classes that Tailwind provides when you're first figuring out your design, making for a much smaller final CSS file that the browser has to download. Initially I ran into a problem where Tailwind would purge all styles anyway.

![Cut out all the fat](https://user-images.githubusercontent.com/54646908/110256849-679e0600-7f9b-11eb-8493-51aaa8163263.png)
###### Cut out all the fat :scissors:

After some debugging I figured out this was because of an incorrect path specification. It was a little harder to debug mostly because I was scared of breaking production again. After breaking production one more time, I was finally able to find the right path. First, I needed to change .js into .tsx. Second, I simply forgot to put a forward slash between the "." and the "src". Oops. You live, you learn.


### Fun with animations

After some designing and some coding, I thought it would be fun to learn one more thing. So I looked into adding a fade in effect based on the scrollbar position. There seemed to be lots of ways out there to achieve this effect. The simplest of which is adding an NPM package called aos, aka animate on scroll. The library is very easy to implement; I merely imported it in the custom app component that Next.js provides and then add the relevant attributes to the HTML elements I want to fade in. It blends very well with Tailwind, where you already add your utility classes inline with the HTML elements. Under the hood, aos seems to use simple JavaScript on scroll handlers to add some preset CSS classes to the desired elements. I found it to be a lightweight solution and painfree implementation.

![Lightning fast set up aos in my _app](https://user-images.githubusercontent.com/54646908/110256853-6967c980-7f9b-11eb-9aa0-349dfc0a56c1.png)
###### Lightning fast set up aos in my _app :rocket:


Special thanks to my beautiful wife for helping me use svgs. Her design experience in using Illustrator saved me probably about an hour of work figuring it out myself.