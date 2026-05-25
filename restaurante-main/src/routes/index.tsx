// Website developed by Lorenzo Fabres
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection, type MenuItem } from "@/components/MenuSection";
import { EventsSection } from "@/components/EventsSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import app1 from "@/assets/app-1.jpg";
import app2 from "@/assets/app-2.jpg";
import dessert1 from "@/assets/dessert-1.jpg";
import dessert2 from "@/assets/dessert-2.jpg";
import drink1 from "@/assets/drink-1.jpg";
import drink2 from "@/assets/drink-2.jpg";
import cocktail1 from "@/assets/cocktail-1.jpg";
import cocktail2 from "@/assets/cocktail-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurélien Maison — Alta Gastronomia" },
      { name: "description", content: "Uma experiência gastronômica inesquecível. Reserve sua mesa na Aurélien Maison." },
      { property: "og:title", content: "Aurélien Maison — Alta Gastronomia" },
      { property: "og:description", content: "Uma experiência gastronômica inesquecível." },
    ],
  }),
  component: Index,
});

const cardapio: MenuItem[] = [
  { name: "Filé Wagyu A5", description: "Selecionado, grelhado ao ponto perfeito, redução de jus dourado e ervas finas.", price: "R$ 320", image: dish1 },
  { name: "Risoto de Trufa Negra", description: "Arroz carnaroli, lascas de trufa negra italiana e parmesão envelhecido 36 meses.", price: "R$ 178", image: dish2 },
  { name: "Vieiras com Caviar", description: "Vieiras selladas, caviar osetra, manteiga noisette e micro ervas do jardim.", price: "R$ 245", image: dish3 },
  { name: "Carré de Cordeiro", description: "Costeletas ao crosta de alecrim, jus à moda antiga e folhas de ouro 24k.", price: "R$ 268", image: dish4 },
];

const aperitivos: MenuItem[] = [
  { name: "Burrata com Figos", description: "Burrata pugliese, figos confitados, prosciutto de San Daniele e mel de trufa.", price: "R$ 98", image: app1 },
  { name: "Tartar de Atum Bluefin", description: "Atum cru cortado à faca, abacate, gergelim torrado e ponzu cítrico.", price: "R$ 112", image: app2 },
];

const sobremesas: MenuItem[] = [
  { name: "Coulant de Chocolate", description: "Chocolate belga 70%, coração líquido, frutas vermelhas e pó de ouro comestível.", price: "R$ 64", image: dessert1 },
  { name: "Crème Brûlée Tahitiana", description: "Baunilha tahitiana, crosta de açúcar mascavo caramelizada na hora.", price: "R$ 58", image: dessert2 },
];

const bebidas: MenuItem[] = [
  { name: "Bordeaux Grand Cru", description: "Château seleção da casa, taça 150ml — corpo encorpado, taninos elegantes.", price: "R$ 92", image: drink1 },
  { name: "Champagne Brut Reserva", description: "Espumante francês método tradicional, perlage delicada e final mineral.", price: "R$ 78", image: drink2 },
];

const drinks: MenuItem[] = [
  { name: "Old Fashioned Defumado", description: "Bourbon envelhecido, bitters, açúcar demerara e defumação de carvalho na taça.", price: "R$ 68", image: cocktail1 },
  { name: "Martini Aurélien", description: "Gin botânico, vermute seco, azeitona Castelvetrano e leve toque cítrico.", price: "R$ 62", image: cocktail2 },
];

function Index() {
  return (
    <main className="relative">
      <Loader />
      <Navbar />
      <Hero />

      <MenuSection
        id="cardapio"
        eyebrow="O Cardápio"
        title="Pratos Principais"
        subtitle="Uma coleção autoral de pratos onde técnica e produto se encontram em harmonia."
        items={cardapio}
      />

      <MenuSection
        id="aperitivos"
        eyebrow="Para Começar"
        title="Aperitivos"
        subtitle="Pequenas entradas para despertar o paladar."
        items={aperitivos}
      />

      <MenuSection
        id="sobremesas"
        eyebrow="Doce Final"
        title="Sobremesas"
        subtitle="A doçura final de uma jornada memorável."
        items={sobremesas}
      />

      <MenuSection
        id="bebidas"
        eyebrow="Carta de Vinhos"
        title="Bebidas"
        subtitle="Rótulos selecionados de pequenas vinícolas ao redor do mundo."
        items={bebidas}
      />

      <MenuSection
        id="drinks"
        eyebrow="Coquetelaria"
        title="Drinks Autorais"
        subtitle="Criações exclusivas do nosso bartender chefe."
        items={drinks}
      />

      <EventsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
