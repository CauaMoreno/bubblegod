import { createClient, Session } from '@supabase/supabase-js'

const supabaseUrl = 'https://hcsmsnyvmcgkgvnppedi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc21zbnl2bWNna2d2bnBwZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NzAxMjksImV4cCI6MjA1MzM0NjEyOX0.hjWIEc7zSW5xL7X2tHydujCl55yDPWY6aT30hi-80NM'
const supabase = createClient(supabaseUrl, supabaseKey)

export async function getDataFromUser(session:Session) {
    // const { data, error } = await supabase.from('user').select().eq('uuid', session?.user.id).single();
     const { data, error } = await supabase.from('gun').select().eq('autor', session?.user.id)
     if (error) {
       console.log(error);
     } else {
        console.log(data)
       return data
     }
}
export async function signOut() {
  const { error } = await supabase.auth.signOut()
}export async function firstLogin(session:Session) {
    const user= await supabase.from('user').select().eq('uuid', session?.user.id).single()
    console.log(user.data)
    if (user.data!=null) {
        return
    } else {
        updateProfile({detergente:0,session:session})
    }
    const guns = await supabase.from('gun').select().eq('autor', session?.user.id)
    if (guns.data?.length!=0) {
        return
    } else {
        await insereGun({nome:"Arco de bolha",block:false,session:session,valor_segundo:1,valor_click:3,valor_desbloqueio:0,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICgxKS5wbmciLCJpYXQiOjE3Mzc3OTY2NzIsImV4cCI6NDg5MTM5NjY3Mn0.GuBVU8QY1zKIfCDLLDIVM48Q--Sm8t-LAM3Mjj57Okk&t=2025-01-25T09%3A17%3A52.407Z",
          tipoUpgrade:"Autoclicker",valorUpgrade:700,adquiridoUpgrade:false
        })



        await insereGun({nome:"Arminha bolhuda",block:true,session:session,valor_segundo:10,valor_click:10,valor_desbloqueio:100,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICgyKS5wbmciLCJpYXQiOjE3Mzc3OTY2OTQsImV4cCI6NDg5MTM5NjY5NH0.4TE5uUlPTceTFesm7SFLeJycgfH106m-WOx_JXjzyuI&t=2025-01-25T09%3A18%3A14.430Z",
          tipoUpgrade:"Multiplicador",valorUpgrade:1500,adquiridoUpgrade:false
        })

        await insereGun({nome:"Bolhão Erlenmeyer",block:true,session:session,valor_segundo:20,valor_desbloqueio:850,valor_click:50,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(4).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICg0KS5wbmciLCJpYXQiOjE3Mzc3OTY3MjEsImV4cCI6MTc0NjQzNjcyMX0.Kzje07TQzLO57_dj8eKhuUcD1KC44FU6jWs382oGgLY&t=2025-01-25T09%3A18%3A41.229Z",
          tipoUpgrade:"Acelerador",valorUpgrade:2000,adquiridoUpgrade:false

        })
        await insereGun({nome:"Aquecedor de bolhas",block:true,session:session,valor_desbloqueio:1500,valor_segundo:30,valor_click:150,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(5).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICg1KS5wbmciLCJpYXQiOjE3Mzc3OTY3MzQsImV4cCI6NDg5MTM5NjczNH0.5XBZRGSNkcPZZWPh-3wbBOhpuCE2tA91H_Iq12-M3TE&t=2025-01-25T09%3A18%3A54.189Z",
          tipoUpgrade:"Multiplicador",valorUpgrade:3000,adquiridoUpgrade:false

        })
        await insereGun({nome:"Bolha de aço ",block:true,session:session,valor_segundo:55,valor_desbloqueio:5000,valor_click:500,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(7).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICg3KS5wbmciLCJpYXQiOjE3Mzc4MDMyNjAsImV4cCI6MTczODQwODA2MH0.fvNg8dDmpeOBOlOVvIHSzcfRhFqCpBjwfCSPvcGS124&t=2025-01-25T11%3A07%3A40.279Z",
          tipoUpgrade:"Acelerador",valorUpgrade:8000,adquiridoUpgrade:false

        })
        await insereGun({nome:"Bolha atômica",block:true,session:session,valor_segundo:3,valor_desbloqueio:10000,valor_click:5,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(3).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICgzKS5wbmciLCJpYXQiOjE3Mzc3OTY3MTAsImV4cCI6NDg5MTM5NjcxMH0.Y37XExB6noXYynA4tTTxCkNZBeU5sqWSd5VRs4EAZj8&t=2025-01-25T09%3A18%3A31.018Z",
          tipoUpgrade:"Inexistente",valorUpgrade:0,adquiridoUpgrade:false
        })
       

    }
}
export async function updateProfile({
    detergente,
    session
  }: {
    detergente:number
    session:Session
  }) {
    try {
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        uuid: session?.user.id,
        detergente:detergente,
        created_at: new Date(),
      }
      const { error } = await supabase.from('user').upsert(updates)
      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    } finally {
    }
}
export async function insereGun({
    nome,
    block,
    session,
    valor_segundo,
    valor_click,
    codigo_imagem,
    valor_desbloqueio,

    tipoUpgrade,
    valorUpgrade,
    adquiridoUpgrade

  }: {
    nome:string
    session:Session
    block:boolean,
    valor_segundo:number,
    valor_click:number,
    valor_desbloqueio:number,
    codigo_imagem:string,

    tipoUpgrade:string,
    valorUpgrade:number,
    adquiridoUpgrade:boolean
  }) {
    try {
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        nome:nome,
        block:block,
        valor_segundo:valor_segundo,
        valor_click:valor_click,
        autor: session?.user.id,
        codigo_imagem:codigo_imagem,
        valor_desbloqueio:valor_desbloqueio,

        tipoUpgrade:tipoUpgrade,
        valorUpgrade:valorUpgrade,
        adquiridoUpgrade:adquiridoUpgrade
      }
      const { error } = await supabase.from('gun').upsert(updates)
      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    } finally {
    }
}
export async function updateGun({
  nome,
  block,
  session,
  valor_segundo,
  valor_click,
  codigo_imagem,
  valor_desbloqueio,
  id,
  tipoUpgrade,
  valorUpgrade,
  adquiridoUpgrade

}: {
  nome:string
  session:Session
  block:boolean,
  valor_segundo:number,
  valor_click:number,
  valor_desbloqueio:number,
  codigo_imagem:string,
  id:number
  tipoUpgrade:string,
  valorUpgrade:number,
  adquiridoUpgrade:boolean
}) {
  try {
    if (!session?.user) throw new Error('No user on the session!')

    const updates = {
      nome:nome,
      block:block,
      valor_segundo:valor_segundo,
      valor_click:valor_click,
      autor: session?.user.id,
      codigo_imagem:codigo_imagem,
      valor_desbloqueio:valor_desbloqueio,
      id:id,
      tipoUpgrade:tipoUpgrade,
      valorUpgrade:valorUpgrade,
      adquiridoUpgrade:adquiridoUpgrade
    }
    const { error } = await supabase.from('gun').upsert(updates)
    if (error) {
      throw error
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  } finally {
  }
}

