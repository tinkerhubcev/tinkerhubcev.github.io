
import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `event`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `http://localhost:3000/api/events/preview`,
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}