var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:3001", "http://127.0.0.1:3001")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("FrontendPolicy");
app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

var products = new List<Product>
{
    new() { Id = 1, Name = "Classic Tee", Category = "Apparel", Price = 29.99m, Stock = 18 },
    new() { Id = 2, Name = "Water Bottle", Category = "Lifestyle", Price = 14.50m, Stock = 27 },
    new() { Id = 3, Name = "Headphones", Category = "Electronics", Price = 89.90m, Stock = 10 },
    new() { Id = 4, Name = "Running Shoes", Category = "Sports", Price = 119.99m, Stock = 12 }
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.MapGet("/products", () => Results.Ok(products));

app.MapGet("/products/{id:int}", (int id) =>
{
    var product = products.FirstOrDefault(p => p.Id == id);
    return product is null ? Results.NotFound() : Results.Ok(product);
});

app.MapPost("/products", (Product product) =>
{
    if (string.IsNullOrWhiteSpace(product.Name))
        return Results.BadRequest("Product name is required.");

    if (string.IsNullOrWhiteSpace(product.Category))
        return Results.BadRequest("Product category is required.");

    if (product.Price < 0)
        return Results.BadRequest("Price cannot be negative.");

    if (product.Stock < 0)
        return Results.BadRequest("Stock cannot be negative.");

    product.Id = products.Count == 0 ? 1 : products.Max(p => p.Id) + 1;
    products.Add(product);

    return Results.Created($"/products/{product.Id}", product);
});

app.MapPut("/products/{id:int}", (int id, Product updatedProduct) =>
{
    var existingProduct = products.FirstOrDefault(p => p.Id == id);
    if (existingProduct is null)
        return Results.NotFound();

    if (string.IsNullOrWhiteSpace(updatedProduct.Name))
        return Results.BadRequest("Product name is required.");

    if (string.IsNullOrWhiteSpace(updatedProduct.Category))
        return Results.BadRequest("Product category is required.");

    if (updatedProduct.Price < 0)
        return Results.BadRequest("Price cannot be negative.");

    if (updatedProduct.Stock < 0)
        return Results.BadRequest("Stock cannot be negative.");

    existingProduct.Name = updatedProduct.Name;
    existingProduct.Category = updatedProduct.Category;
    existingProduct.Price = updatedProduct.Price;
    existingProduct.Stock = updatedProduct.Stock;

    return Results.Ok(existingProduct);
});

app.MapDelete("/products/{id:int}", (int id) =>
{
    var product = products.FirstOrDefault(p => p.Id == id);
    if (product is null)
        return Results.NotFound();

    products.Remove(product);
    return Results.NoContent();
});

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC * 1.8);
}

class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int Stock { get; set; }
}
