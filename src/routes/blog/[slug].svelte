<script context="module">
    export async function load({ page, fetch }) {
      const url = `/blog/${page.params.slug}.json`
      console.log({url});
      const res = await fetch(url)
      if (res.ok) {
        const blog = await res.json()
        // console.log({ blog })
        // console.log(blog);
        return { props: { name: blog.name } }
      }
      return {
        status: res.status,
        error: new Error(`Could not load ${url}`)
      }
    }
  </script>
  <script lang="ts">
      export let name;
  </script>
  
  
  
 <p>Hello{name}</p>