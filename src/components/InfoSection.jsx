const InfoSection = ({spacing}) => {
  return (
    <div className={`h-screen flex flex-col justify-center text-justify ${spacing}`}>
      <p className="text-body-callout font-bold">
        In 1971, Senegalese poet-president Leopold Sedar Senghor wanted to affirm the political renewal of his country by forging its own architectural identity.
      </p>
      <p className="text-body-regular mt-12">
      Rencontres Afritechture carries this spirit forward, positioning itself as both a continuation of that legacy and a provocation toward new futures. The festival brings together architects, artists, and thinkers to explore how built environments can shape culture, identity, and possibility across Africa today.
      </p>
    </div>
  )
}

export default InfoSection


