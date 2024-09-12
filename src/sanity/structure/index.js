// sanity.config.js

export const structure = (S) =>
  S.list()
.title('Content')
.items([
  S.listItem()
    .title('Dinosaurs')
    .child(
      S.list()
        .title('Dinosaurs')
        .items([
          S.listItem()
            .title('All Dinosaurs')
            .child(S.documentTypeList('dinosaur').title('All Dinosaurs')),
          S.listItem()
            .title('By Period')
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
    .child(
      S.list()
        .title('Taxonomy')
        .items([
          S.documentTypeListItem('period').title('Periods'),
          S.documentTypeListItem('diet').title('Diets'),
          S.documentTypeListItem('habitat').title('Habitats'),
          S.documentTypeListItem('dinosaurGroup').title('Dinosaur Groups'),
        ])
    ),
  S.divider(),
  S.documentTypeListItem('location').title('Locations'),
  S.documentTypeListItem('dinosaurOutline').title('Dinosaur Outlines'),
])