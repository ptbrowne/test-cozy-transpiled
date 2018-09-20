import React from 'react'
import { render } from 'react-dom'
import { Sidebar, Layout, Main, Icon, Avatar, Content, Button, Chip, Hero } from 'cozy-ui/dist/react'

console.log({
  Icon,
  Chip,
  Avatar,
  Hero
})

const ContactChip = ({ contact }) => (
  <Chip style={{ paddingLeft: '0.25rem' }}>
    <Avatar textId={ contact.name } text={contact.initials} size='small' style={{ marginRight: '0.5rem' }}/> {contact.name}
  </Chip>
);

<div>
  <Chip>
    <Icon icon='file' style={{ marginRight: '0.5rem' }}/> File
  </Chip><br/>
  <ContactChip contact={{ initials: 'AL',  name: 'Ada Lovelace'}} />
  <ContactChip contact={{ initials: 'CB',  name: 'Charles Babbage'}} />
  <ContactChip contact={{ initials: 'GH',  name: 'Grace Hopper'}} />
  <ContactChip contact={{ initials: 'JM',  name: 'John McCarthy'}} />
  <ContactChip contact={{ initials: 'DK',  name: 'Donald Knuth'}} />
  <ContactChip contact={{ initials: 'BL',  name: 'Barbara Liskov'}} />
</div>

class App extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({ count: this.state.count + 1})
    }, 1000)
  }
  render () {
    return (
      <Layout>
        <Sidebar>
          { this.state.count }
        </Sidebar>
        <Main>
          <Content>
            <p>
              <Button label='toto' />
            </p>
            <Icon icon='file' style={{ marginRight: '0.5rem' }}/> File
              <ContactChip contact={{ initials: 'AL',  name: 'Fabien Bassereau'}} />

            Coucou
            <ContactChip contact={{ initials: 'CB',  name: 'Charles Babbage'}} />
            <ContactChip contact={{ initials: 'GH',  name: 'Grace Hopper'}} />
            <ContactChip contact={{ initials: 'JM',  name: 'John McCarthy'}} />
            <ContactChip contact={{ initials: 'DK',  name: 'Donald Knuth'}} />
            <ContactChip contact={{ initials: 'BL',  name: 'Barbara Liskov'}} />
          </Content>
        </Main>
      </Layout>
    )
    
  }
}

const node = document.querySelector('#app')
render(<App />, node)
