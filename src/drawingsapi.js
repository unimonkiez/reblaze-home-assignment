export default {

  async getData() {
    const res = await fetch("http://localhost:3000/api/drawings");
    const data = await res.json();
    return data;
  },

  async addDrawing(drawing) {
    await fetch("http://localhost:3000/api/drawings", {
      method: "POST",
      body: JSON.stringify(drawing),
      headers: { "Content-Type": "application/json" }
    });
  }
}
