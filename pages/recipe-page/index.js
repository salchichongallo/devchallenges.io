import React from "react";
import Head from "next/head";
import photo1 from "./photo1.png";
import GlobalStyles from "./recipe-page.styles";

function RecipePage() {
  return (
    <>
      <GlobalStyles />
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="hero">
        <h1 className="hero__title">Classic Cheesecake Recipe</h1>
        <div className="hero__description">
          <div className="six-dots"></div>
          <p>
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </p>
        </div>
        <div className="hero__image">
          <img src={photo1} alt="Cake" />
        </div>
      </header>

      <div className="layout">
        <aside className="aside layout__aside">
          <div>
            <div className="detail detail--active">
              <i className="material-icons detail__icon">local_dining</i>
              <div>
                <div className="detail__label">Yields</div>
                <div className="detail__content">12 servings</div>
              </div>
            </div>
          </div>
          <div className="aside__details">
            <div className="detail">
              <i className="material-icons detail__icon">timer</i>
              <div>
                <div className="detail__label">Prep Time</div>
                <div className="detail__content">45 minutes</div>
              </div>
            </div>
            <div className="detail">
              <i className="material-icons detail__icon">microwave</i>
              <div>
                <div className="detail__label">Cook Time</div>
                <div className="detail__content">1 hour</div>
              </div>
            </div>
            <div className="detail">
              <i className="material-icons detail__icon">done_all</i>
              <div>
                <div className="detail__label">Total Time</div>
                <div className="detail__content">7,75 hours</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="layout__main">
          <article className="section ingredients">
            <h2 className="section__title">Ingredients</h2>
            <section className="meal">
              <h3 className="meal__title">Graham Cracker Crust</h3>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing1" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing1">
                    1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10
                    full sheet graham crackers)
                  </label>
                </p>
              </div>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing2" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing2">
                    5 Tablespoons (70g) <b>unsalted butter,</b> melted
                  </label>
                </p>
              </div>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing3" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing3">
                    1/4 cup (50g) <b>granulated sugar</b>
                  </label>
                </p>
              </div>
            </section>

            <section className="meal">
              <h3 className="meal__title">Cheesecake</h3>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing4" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing4">
                    four 8-ounce blocks (904g) full-fat
                    <b>cream cheese,</b> softened to room temperature
                  </label>
                </p>
              </div>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing5" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing5">
                    {" "}
                    1 cup (200g) <b>granulated sugar</b>{" "}
                  </label>
                </p>
              </div>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing6" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing6">
                    1 cup (240g) full-fat <b>sour cream,</b> at room temperature
                  </label>
                </p>
              </div>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing7" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing7">
                    1 teaspoon <b>pure vanilla extract</b>
                  </label>
                </p>
              </div>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing8" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing8">
                    2 teaspoons <b>fresh lemon juice</b> (optional, but
                    recommended)
                  </label>
                </p>
              </div>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing9" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing9">
                    3 large <b>eggs,</b> at room temperature
                  </label>
                </p>
              </div>
              <div className="ingredient">
                <div className="ingredient__checkbox">
                  <label className="checkbox">
                    <input id="ing10" type="checkbox" />
                    <span className="checkbox__checkmark">
                      <i className="material-icons checkbox__mark">done</i>
                    </span>
                  </label>
                </div>
                <p className="ingredient__content">
                  <label htmlFor="ing10">
                    topping suggestions:
                    <i>
                      salted caramel, lemon curd, strawberry topping, chocolate
                      ganache, red wine chocolate ganache, fresh fruit, whipped
                      cream, or raspberry sauce
                    </i>
                    (recipe in notes)
                  </label>
                </p>
              </div>
            </section>
          </article>

          <section className="section instructions">
            <h2 className="section__title">Instructions</h2>
            <ol>
              <li>
                Adjust the oven rack to the lower-middle position and preheat
                oven to 350°F (177°C).
              </li>
              <li>
                <b>Make the crust:</b> Using a food processor, pulse the graham
                crackers into crumbs. Pour into a medium bowl and stir in sugar
                and melted butter until combined. (You can also pulse it all
                together in the food processor.) Mixture will be sandy. Press
                firmly into the bottom and slightly up the sides of a 9-inch or
                10-inch springform pan. No need to grease the pan first. I use
                the bottom of a measuring cup to pack the crust down tightly.
                Pre-bake for 8 minutes. Remove from the oven and place the hot
                pan on a large piece of aluminum foil. The foil will wrap around
                the pan for the water bath in step 4. Allow crust to slightly
                cool as you prepare the filling.
              </li>
              <li>
                <b>Make the filling:</b> Using a handheld or stand mixer fitted
                with a paddle attachment, beat the cream cheese and granulated
                sugar together on medium-high speed in a large bowl until the
                mixture is smooth and creamy, about 2 minutes. Add the sour
                cream, vanilla extract, and lemon juice then beat until fully
                combined. On medium speed, add the eggs one at a time, beating
                after each addition until just blended. After the final egg is
                incorporated into the batter, stop mixing. To help prevent the
                cheesecake from deflating and cracking as it cools, avoid
                over-mixing the batter as best you can.
              </li>
              <li>
                <b>Prepare the simple water bath (see note)</b> Boil a pot of
                water. You need 1 inch of water in your roasting pan for the
                water bath, so make sure you boil enough. I use an entire kettle
                of hot water. As the water is heating up, wrap the aluminum foil
                around the springform pan. Pour the cheesecake batter on top of
                the crust. Use a rubber spatula or spoon to smooth it into an
                even layer. Place the pan inside of a large roasting pan.
                Carefully pour the hot water inside of the pan and place in the
                oven. (Or you can place the roasting pan in the oven first, then
                pour the hot water in. Whichever is easier for you.)
              </li>
              <li>
                Bake cheesecake for 55-70 minutes or until the center is almost
                set. When it’s done, the center of the cheesecake will slightly
                wobble if you gently shake the pan. Turn the oven off and open
                the oven door slightly. Let the cheesecake sit in the oven in
                the water bath as it cools down for 1 hour. Remove from the oven
                and water bath, then cool cheesecake completely at room
                temperature. Then refrigerate the cheesecake for at least 4
                hours or overnight.
              </li>
              <li>
                Use a knife to loosen the chilled cheesecake from the rim of the
                springform pan, then remove the rim. Using a clean sharp knife,
                cut into slices for serving. For neat slices, wipe the knife
                clean and dip into warm water between each slice.
              </li>
              <li>
                Serve cheesecake with desired toppings. Cover and store leftover
                cheesecake in the refrigerator for up to 5 days.
              </li>
            </ol>

            <div className="instructions__source">
              Source: https://sallysbakingaddiction.com/classic-cheesecake/
            </div>
          </section>
        </main>
      </div>
      <footer className="footer">
        <a
          href="https://devchallenges.io/profile/PPGDlVc9JMi4fOFL2ubF"
          rel="noopener nofollow"
          target="_blank"
        >
          Jimmy Murillo @ DevChallenges.io
        </a>
      </footer>
    </>
  );
}

export default RecipePage;
