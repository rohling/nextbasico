

export default function Home() {

  const a= 12;
  return (
    <>
      <h1 className="text-center bg-amber-400" >UTFPR</h1>
      <h2 className="text-center">Francisco Beltrão</h2>
      <HomeConent/>
    </>
  );
}
export  function HomeConent(){
  return(
    <h1>Conteúdo Novo</h1>
  )
}

