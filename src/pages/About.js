import imageone from './../images/001.jpeg';
import './../css/App.css';

export default function About() {
  return (
    <div>
      {/* main content */}
      <main className="mainflex">
        {/* an article segemnt */}
        <section className="randflex">
          <article>
            <h2>about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet malesuada massa, ut fermentum neque. Integer justo nulla, placerat vitae augue eget, efficitur vulputate dui. Nulla laoreet arcu magna, sit amet eleifend nibh elementum a. Duis gravida eros odio, eget ullamcorper purus ornare eget. Praesent nec lorem id justo ultrices euismod. Donec aliquam urna quis elit luctus lobortis. Ut et semper eros.</p>
          </article>
          <article>
            <h3>some more cool stuff</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet malesuada massa, ut fermentum neque. Integer justo nulla, placerat vitae augue eget, efficitur vulputate dui. Nulla laoreet arcu magna, sit amet eleifend nibh elementum a. Duis gravida eros odio, eget ullamcorper purus ornare eget. Praesent nec lorem id justo ultrices euismod. Donec aliquam urna quis elit luctus lobortis. Ut et semper eros.</p>
          </article>
          <article>
            <h2>some more cool stuff</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet malesuada massa, ut fermentum neque. Integer justo nulla, placerat vitae augue eget, efficitur vulputate dui. Nulla laoreet arcu magna, sit amet eleifend nibh elementum a. Duis gravida eros odio, eget ullamcorper purus ornare eget. Praesent nec lorem id justo ultrices euismod. Donec aliquam urna quis elit luctus lobortis. Ut et semper eros.</p>
          </article>
        </section>
        <section>
          {/* Changing image */}
          <img src={imageone} className="first-image" alt="about page image" />
        </section>
      </main>
      {/* footer of site */}
      <footer>
        <p class="footerp">sent nec lorem id justo ultrices euismod. Donec aliquam urna quis elit luctus lobortis. Ut et semper eros.</p>
        {/* Hypothetical site mpa links */}
        <ul class="footlist">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </footer>
    </div>
  );
}