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
export async function firstLogin(session:Session) {
    const user= await supabase.from('user').select().eq('uuid', session?.user.id).single()
    console.log(user.data)
    if (user.data!=null) {
    //    return
    } else {
        updateProfile({detergente:0,primeiro_login:false,session:session})
    }
    const guns = await supabase.from('gun').select().eq('autor', session?.user.id)
    if (guns.data?.length!=0) {
        return
    } else {
        await updateGun({nome:"arma1",block:false,session:session,valor_segundo:1,valor_click:2,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICgxKS5wbmciLCJpYXQiOjE3Mzc3OTY2NzIsImV4cCI6NDg5MTM5NjY3Mn0.GuBVU8QY1zKIfCDLLDIVM48Q--Sm8t-LAM3Mjj57Okk&t=2025-01-25T09%3A17%3A52.407Z"})
        await updateGun({nome:"arma2",block:true,session:session,valor_segundo:5,valor_click:2,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICgyKS5wbmciLCJpYXQiOjE3Mzc3OTY2OTQsImV4cCI6NDg5MTM5NjY5NH0.4TE5uUlPTceTFesm7SFLeJycgfH106m-WOx_JXjzyuI&t=2025-01-25T09%3A18%3A14.430Z"})
        await updateGun({nome:"arma3",block:true,session:session,valor_segundo:3,valor_click:5,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(3).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICgzKS5wbmciLCJpYXQiOjE3Mzc3OTY3MTAsImV4cCI6NDg5MTM5NjcxMH0.Y37XExB6noXYynA4tTTxCkNZBeU5sqWSd5VRs4EAZj8&t=2025-01-25T09%3A18%3A31.018Z"})
        await updateGun({nome:"arma2",block:true,session:session,valor_segundo:5,valor_click:2,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(4).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICg0KS5wbmciLCJpYXQiOjE3Mzc3OTY3MjEsImV4cCI6MTc0NjQzNjcyMX0.Kzje07TQzLO57_dj8eKhuUcD1KC44FU6jWs382oGgLY&t=2025-01-25T09%3A18%3A41.229Z"})
        await updateGun({nome:"arma3",block:true,session:session,valor_segundo:3,valor_click:5,codigo_imagem:"https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(5).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICg1KS5wbmciLCJpYXQiOjE3Mzc3OTY3MzQsImV4cCI6NDg5MTM5NjczNH0.5XBZRGSNkcPZZWPh-3wbBOhpuCE2tA91H_Iq12-M3TE&t=2025-01-25T09%3A18%3A54.189Z"})

    }
}
async function updateProfile({
    detergente,
    primeiro_login,
    session
  }: {
    detergente:number
    session:Session
    primeiro_login:boolean
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
async function updateGun({
    nome,
    block,
    session,
    valor_segundo,
    valor_click,
    codigo_imagem

  }: {
    nome:string
    session:Session
    block:boolean,
    valor_segundo:number,
    valor_click:number,
    codigo_imagem:string
  }) {
    try {
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        nome:nome,
        block:block,
        valor_segundo:valor_segundo,
        valor_click:valor_click,
        autor: session?.user.id,
        codigo_imagem:codigo_imagem
      }
      const { error } = await supabase.from('gun').insert(updates)
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
