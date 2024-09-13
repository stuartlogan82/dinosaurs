// sanity.config.js
import { GiDinosaurBones, GiCalendar, GiFoodChain, GiPalmTree, GiBookshelf, GiPencil, GiTreasureMap, GiDinosaurEgg } from "react-icons/gi";

export const structure = (S) =>
  S.list()
.title('Content')
.items([
  S.listItem()
    .title('Dinosaurs')
    .icon(GiDinosaurBones)
    .child(
      S.list()
        .title('Dinosaurs')
        .items([
          S.listItem()
            .title('All Dinosaurs')
            .icon(GiDinosaurBones)
            .child(S.documentTypeList('dinosaur').title('All Dinosaurs')),
          S.listItem()
            .title('By Period')
            .icon(GiCalendar)
            .child(
              S.documentTypeList('period')
                .title('Periods')
                .child(periodId =>
                  S.documentList()
                    .title('Dinosaurs')
                    .filter('_type == "dinosaur" && period._ref == $periodId')
                    .params({periodId})
                )
            ),
          S.listItem()
            .title('By Diet')
            .icon(GiFoodChain)
            .child(
              S.documentTypeList('diet')
                .title('Diets')
                .child(dietId =>
                  S.documentList()
                    .title('Dinosaurs')
                    .filter('_type == "dinosaur" && diet._ref == $dietId')
                    .params({dietId})
                )
            ),
          S.listItem()
            .title('By Habitat')
            .icon(GiPalmTree)
            .child(
              S.documentTypeList('habitat')
                .title('Habitats')
                .child(habitatId =>
                  S.documentList()
                    .title('Dinosaurs')
                    .filter('_type == "dinosaur" && habitat._ref == $habitatId')
                    .params({habitatId})
                )
            ),
        ])
    ),
  S.divider(),
  S.listItem()
    .title('Taxonomy')
    .icon(GiBookshelf)
    .child(
      S.list()
        .title('Taxonomy')
        .items([
          S.documentTypeListItem('period').title('Periods').icon(GiCalendar),
          S.documentTypeListItem('diet').title('Diets').icon(GiFoodChain),
          S.documentTypeListItem('habitat').title('Habitats').icon(GiPalmTree),
          S.documentTypeListItem('dinosaurGroup').title('Dinosaur Groups').icon(GiDinosaurEgg),
        ])
    ),
  S.divider(),
  S.documentTypeListItem('location').title('Locations').icon(GiTreasureMap),
  S.documentTypeListItem('dinosaurOutline').title('Dinosaur Outlines').icon(GiPencil),
])