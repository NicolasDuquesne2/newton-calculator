
export const texts = {
    home: {
        french: {
            title: "Bienvenue sur le calculateur de newtons pour Empyrion",
            description: `Cette page vous permettra de déterminer la force nécessaire à appliquer à votre vaisseau en newton
            selon vos critères de masse en Tonne ou Kilo-tonne, de gravité maximum à atteindre. Elle vous permettra aussi de
            savoir la gravité maximum supportable pour votre vaisseau`,
        },

        english: {
            title: "Welcome to the Empyrion newton calculator",
            description: `This page will allow you to determine the necessary force to apply to your vessel in Newtons 
            according to your criteria of mass in Tons or Kilo-tons, of maximum gravity to reach. 
            It will also allow you to know the maximum gravity bearable for your ship`
        }
    },

    image: {
        french: {
            top: "L'image ci-dessous indique l'emplacment des données à intégrer dans les formulaires, aux numéros correspondants",
            badge1: "Masse du vaisseau",
            badge2: "Newtons"
        },

        english: {
            top: "The image below shows the location of the data to be included in the forms, at the corresponding numbers",
            badge1: "Ship weight",
            badge2: "Newtons"
        }
    },

    gmaxform: {
        french: {
            title: `G maximum`,
            description: `Entrez la masse du vaisseau en Kilo-tonne, la masse du cargo(contraintes poids/volume)
            et la poussée de vos propulseurs en dessous de votre vaisseau, en kilo newtons`,
            massfield: `Masse du vaisseau`,
            cargo: `Masse de la marchandise`,
            massplaceholder: "Masse en tonnes",
            newtons: `Newtons`,
            newtonplaceholder: "Newtons en Kilo-newtons",
            massTooltip : "Pour 1 Kt, entrez 1 000",
            newtonTooltip: "Pour 1 MN, entrez 1 000",
            calculatebutton: `Calculer`,
            erasebutton: `Effacer`
        },

        english: {
            title:`Max G`,
            description: `Enter the mass of the ship in kilotons, the mass of the cargo (weight/volume constraints)
            and the thrust of your thrusters below your ship, in kilo newtons`,
            massfield: `Ship weight`,
            cargo: `Cargo weight`,
            massplaceholder: "Weight in tonnes",
            newtons: `Newtons`,
            newtonplaceholder: "Newtons in kilonewtons",
            massTooltip : "For 1 Kt, put 1 000",
            newtonTooltip: "For 1 MN, put 1 000",
            calculatebutton: `Calculate`,
            erasebutton: `Erase`
        }
    },

    nminform: {
        french: {
            title: `Newtons minimum avec masse et G`,
            description: `Entrez la masse du vaisseau en Kilo-tonne, la masse du cargo(contraintes poids/volume)
             et le nombre de G visé`,
            massfield: `Masse du vaisseau`,
            cargo: `Masse de la marchandise`,
            massplaceholder: "Masse en tonnes",
            g: `Nombre de G`,
            calculatebutton: `Calculer`,
            erasebutton: `Effacer`,
            massTooltip : "Pour 1 Kt, entrez 1 000"
        },

        english: {
            title:`Minimum newtons with weight and G`,
            description: `Enter the mass of the ship in kilotons, the mass of the cargo (weight/volume constraints)
            and the number of G targeted`,
            massfield: `Ship weight`,
            cargo: `Cargo weight`,
            massplaceholder: "Weight in tonnes",
            g: `Number of G`,
            calculatebutton: `Calculate`,
            erasebutton: `Erase`,
            massTooltip : "For 1 Kt, put 1 000"
        }
    },

    gmaxTab: {
        french: {
            max: 'G maximum',
            acc: 'Acceleration en m/s²'
        },

        english: {
            max: 'Maximum G',
            acc: 'Acceleration in m/s²'
        }
    },

    nminTab: {
        french: {
            min: 'Newtons minimum',
            acc: 'Acceleration en m/s²'
        },

        english: {
            min: 'Minimum newtons',
            acc: 'Acceleration in m/s²'
        }
    }
}