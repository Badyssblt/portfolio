---
title: "Alimify"
summary: "Application mobile de gestion d'inventaire"
date: "2024-10-29T23:00:00.000Z"
draft: false
tags:
  - AdonisJS
  - Expo
  - ReactNative
repoUrl: https://github.com/Badyssblt/ReadMind
---

Cette application mobile a été développée avec React Native (application mobile) et AdonisJS (serveur). Elle permet de scanner des articles (généralement alimentaires) grâce à leurs codes-barres. Il y a une fonctionnalité d’ajout de courses où l’on peut ajouter les articles relatifs à une liste de courses. Ce projet a été très intéressant, car j’ai appris beaucoup de choses, comme un nouveau framework backend, Adonis, et j’ai pu approfondir ma connaissance de React Native.

La principale difficulté a été de créer un scanner pour récupérer le code-barres d’un article, ce qui permet ensuite d’appeler l’API d’OpenFoodFacts afin de récupérer les informations (images, nom, calories…). L’utilisateur entre ensuite un prix.

La découverte d’Adonis m’a permis de comprendre d’autres fonctionnements d’ORM, de routeur, etc. Par exemple, Adonis embarque un système de routage dans un seul fichier (comme Laravel, par exemple), mais je trouve la syntaxe de Symfony plus facile et logique, car en fonction de la taille du projet, on peut rapidement se perdre.

Voici un exemple: 

```js
// Groupe pour les aliments
router
    .group(() => {
        router.get('/', [FoodsController, 'index'])
        router.post('/', [FoodsController, 'create'])
        router.get('/:id', [FoodsController, 'show'])
        router.patch('/:id', [FoodsController, 'update'])
        router.get('/:barCode/course', [FoodsController, 'isInCourse'])
        router.delete('/:id', [FoodsController, 'delete'])
    })
    .prefix('/api/foods')
```

Si je devais trouver une difficulté pour la réalisation de l’application mobile, ce serait la gestion du scanner avec des problèmes de dépendances avec Expo. J’ai donc décidé d’utiliser Expo Camera en suivant leur documentation, et finalement, cela a été très simple avec l’import de CameraView et l’envoi d’une fonction en props.

````js
return (
    <View style={styles.container}>
        <CameraView
            style={StyleSheet.absoluteFillObject}
            onBarcodeScanned={handleBarCodeScanned}
        />
        <View style={styles.scanArea}>
            <Text style={styles.scanText}>Placez le code-barres ici</Text>
        </View>
        {scanned && (
            <Button title={'Scanner à nouveau'} onPress={() => {
                setScanned(false);
                setScannedData(null);
            }} />
        )}
        { priceModal && <Confirmation confirmationTitle={"Quelle est le prix de ce produit ?"}>
            <View>
                <TextInput
                    style={styles.input}
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                    placeholder="Entrez un nombre"
                    onSubmitEditing={() => validateChange()}
                />
            </View>

        </Confirmation>}
    </View>
);
````