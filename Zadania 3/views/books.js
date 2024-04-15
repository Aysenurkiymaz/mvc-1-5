<%- include('../partials/navigation') %>
<h1>Books</h1>
<% if (books.length === 0) { %>
  <p>No books has been found</p>
<% } else { %>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Publishing Year</th>
        <th>Author</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <% books.forEach(book => { %>
        <tr>
          <td><%= book.id %></td>
          <td><%= book.title %></td>
          <td><%= book.publishingYear %></td>
          <td><%= book.author.name %></td>
          <td>
            <form action="/book/delete/<%= book.id %>" method="post">
              <button type="submit">Delete</button>
            </form>
          </td>
        </tr>
      <% }); %>
    </tbody>
  </table>
<% } %>