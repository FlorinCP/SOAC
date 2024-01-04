export async function  fetchParsedFile(filename: string[]): Promise<{B: number, S: number, L: number}> {

  const url = new URL("http://localhost:5000/parse-file");
  url.searchParams.append("filename", filename[0]);

  try{
      const response = await fetch(url)
      if (!response.ok){
          throw new Error(`Error fetching file: ${filename} from server with status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log(data)
      return {B: data.B, S: data.S, L: data.L}
  } catch (error) {
      console.error("Fetching parsed file failed:", error);
      throw error;
  }
}
