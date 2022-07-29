export const shorten = (str: string) => {
  if (!str) return;
  return str.length > 20 ? str.substring(0, 20) + '...' : str
}

export const randomUserURL = async (gender="male") => {
  const response = await fetch(`https://randomuser.me/api/?gender=${gender}`)
  const jsonResponse = await response.json()
  return jsonResponse.results[0].picture.large
}

export const random100Friends = async () => {
  const response = await fetch(`https://randomuser.me/api/?results=100`)
  const jsonResponse = await response.json()
  return jsonResponse.results.map((j: any) => convertProfile(j))
}

const convertProfile = (u: any) => {
  return {
    name: `${u.name.first} ${u.name.last}`,
    email: u.email,
    dob: u.dob.date,
    phone: u.cell,

    did: "did:3:kjzl6cwe1jw148vr6rogsa2t1ievcfiwg4zpgh5zx8u59nbobz175bs0vpvwsga",
    twitter: "ijonas",
    instagram: "ijonas",
    github: "ijonas",
    avatarURL: u.picture.large,
    _loaded: true,
  }
}

export const randomUser = async () => {
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json()
  const u = data.results[0];
  return {
    name: `${u.name.first} ${u.name.last}`,
    email: u.email,
    dob: u.dob.date,
    phone: u.cell,

    did: "did:3:kjzl6cwe1jw148vr6rogsa2t1ievcfiwg4zpgh5zx8u59nbobz175bs0vpvwsga",
    twitter: "ijonas",
    instagram: "ijonas",
    github: "ijonas",
    avatarURL: u.picture.large,
    _loaded: true,
  }
}