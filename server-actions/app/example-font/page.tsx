import { Roboto, Poppins, Jockey_One, Bitcount_Single } from "next/font/google";
import React from "react";

const roboto = Roboto({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
})

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
})

const jockey = Jockey_One({
    weight: ["400"],
    subsets: ["latin"]
})

const bitcount = Bitcount_Single({
    weight: ["400"],
    subsets: ["latin"]
})

function FontExample() {
  return (
    <div>
      <h1 className={`text-4xl ${jockey.className}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        saepe?
      </h1>
      <p className={`text-2xl ${bitcount.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi autem iste esse nemo, numquam delectus odio pariatur deleniti perspiciatis! Perferendis itaque, ut numquam modi perspiciatis nisi doloremque labore in consequuntur recusandae, libero maxime repellat expedita officiis facilis quod natus. Corporis nihil vel eaque vitae, omnis doloribus modi molestiae molestias ducimus laboriosam similique veritatis assumenda aut minus illum aliquam. Voluptates, nostrum, autem aperiam mollitia quibusdam dolores placeat nam temporibus voluptas explicabo quo perferendis illum ipsa suscipit consectetur accusantium, dolorem nemo.</p>
    </div>
  );
}

export default FontExample;
