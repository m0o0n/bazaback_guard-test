
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/api/v1/auth/login": {
        "post": {
          "operationId": "AppController_login",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "get all reviews",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/v1/profile": {
        "get": {
          "operationId": "AppController_getProfile",
          "parameters": [],
          "responses": {
            "201": {
              "description": "get all reviews",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/v1/user": {
        "post": {
          "operationId": "UserController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "get all reviews",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "User"
          ]
        }
      },
      "/api/v1/gallery/pagination": {
        "get": {
          "operationId": "GalleryController_findAllWithPagination",
          "parameters": [
            {
              "name": "page",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get all images",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Gallery"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        }
      },
      "/api/v1/gallery": {
        "post": {
          "operationId": "GalleryController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateGalleryDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "created",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Gallery"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        },
        "get": {
          "operationId": "GalleryController_findAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": "get all images",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Gallery"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        }
      },
      "/api/v1/gallery/{id}": {
        "get": {
          "operationId": "GalleryController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "get  image by id",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Gallery"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        },
        "delete": {
          "operationId": "GalleryController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "delete image"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        }
      },
      "/api/v1/gallery/upload": {
        "post": {
          "operationId": "GalleryController_uploadFile",
          "parameters": [],
          "responses": {
            "200": {
              "description": "upload image",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadImageResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        }
      },
      "/api/v1/password/forgot": {
        "post": {
          "operationId": "PasswordController_forgotPassword",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ForgotPasswordDto"
                }
              }
            }
          },
          "responses": {
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Password"
          ]
        }
      },
      "/api/v1/password/reset": {
        "post": {
          "operationId": "PasswordController_resetPassword",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResetPasswordDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "reset password",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Password"
          ]
        }
      },
      "/api/v1/password/change": {
        "post": {
          "operationId": "PasswordController_changePassword",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ChangePasswordDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "change password",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Password"
          ]
        }
      },
      "/api/v1/testimonials": {
        "post": {
          "operationId": "TestimonialsController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateTestimonialDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "create testimonial",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Testimonial"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Testimonials"
          ]
        },
        "get": {
          "operationId": "TestimonialsController_findAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": "get all testimonials",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Testimonial"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Testimonials"
          ]
        }
      },
      "/api/v1/testimonials/{id}": {
        "get": {
          "operationId": "TestimonialsController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "get single testimonial",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Testimonial"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Testimonials"
          ]
        },
        "patch": {
          "operationId": "TestimonialsController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateTestimonialDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "update testimonial",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Testimonial"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Testimonials"
          ]
        },
        "delete": {
          "operationId": "TestimonialsController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "delete testimonial"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Testimonials"
          ]
        }
      },
      "/api/v1/partners": {
        "post": {
          "operationId": "PartnersController_create",
          "summary": "Create a Partner",
          "parameters": [],
          "requestBody": {
            "required": true,
            "description": "Upload a file",
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "file": {
                      "type": "string",
                      "format": "binary"
                    },
                    "name": {
                      "type": "string"
                    },
                    "partner_url": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "file",
                    "name",
                    "partner_url"
                  ],
                  "$ref": "#/components/schemas/"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Partners"
          ]
        },
        "get": {
          "operationId": "PartnersController_findAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Partners"
          ]
        }
      },
      "/api/v1/partners/{id}": {
        "get": {
          "operationId": "PartnersController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Partners"
          ]
        },
        "patch": {
          "operationId": "PartnersController_update",
          "summary": "Update a Partner",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "description": "Upload a file",
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "file": {
                      "type": "string",
                      "format": "binary"
                    },
                    "name": {
                      "type": "string"
                    },
                    "partner_url": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "partner_url"
                  ],
                  "$ref": "#/components/schemas/"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Partners"
          ]
        },
        "delete": {
          "operationId": "PartnersController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Partners"
          ]
        }
      },
      "/api/v1/counters": {
        "post": {
          "operationId": "CountersController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateCounterDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "create testimonial",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Counter"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Counters"
          ]
        },
        "get": {
          "operationId": "CountersController_findAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": "get all counters",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Counter"
                    }
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Counters"
          ]
        }
      },
      "/api/v1/counters/{id}": {
        "get": {
          "operationId": "CountersController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "get single counter",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Counter"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "counter not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Counters"
          ]
        },
        "patch": {
          "operationId": "CountersController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateTestimonialDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "update counters",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Counter"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Counters"
          ]
        },
        "delete": {
          "operationId": "CountersController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "delete counter"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Counters"
          ]
        }
      },
      "/api/v1/posts": {
        "post": {
          "operationId": "PostsController_create",
          "summary": "Create a Post",
          "parameters": [],
          "requestBody": {
            "required": true,
            "description": "Upload a file",
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "file": {
                      "type": "string",
                      "format": "binary"
                    },
                    "title": {
                      "type": "string"
                    },
                    "content": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "file",
                    "title",
                    "content"
                  ],
                  "$ref": "#/components/schemas/"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "created",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostEntity"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Posts"
          ]
        },
        "get": {
          "operationId": "PostsController_findAll",
          "summary": "Get posts",
          "parameters": [],
          "responses": {
            "200": {
              "description": "get all testimonials",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/PostEntity"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Posts"
          ]
        }
      },
      "/api/v1/posts/{id}": {
        "get": {
          "operationId": "PostsController_findOne",
          "summary": "Get post by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostEntity"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request"
            },
            "404": {
              "description": "Not Found"
            }
          },
          "tags": [
            "Posts"
          ]
        },
        "patch": {
          "operationId": "PostsController_update",
          "summary": "Update post",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "description": "Upload a file",
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "file": {
                      "type": "string",
                      "format": "binary"
                    },
                    "title": {
                      "type": "string"
                    },
                    "content": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "title",
                    "content"
                  ],
                  "$ref": "#/components/schemas/"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "update post",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostEntity"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Posts"
          ]
        },
        "delete": {
          "operationId": "PostsController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Deleted Successfully"
            },
            "404": {
              "description": "Not Found"
            }
          },
          "tags": [
            "Posts"
          ]
        }
      },
      "/api/v1/stack": {
        "post": {
          "operationId": "StackController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateStackDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          }
        },
        "get": {
          "operationId": "StackController_findAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/api/v1/stack/{id}": {
        "get": {
          "operationId": "StackController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          }
        },
        "patch": {
          "operationId": "StackController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateStackDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          }
        },
        "delete": {
          "operationId": "StackController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/api/v1/specialization": {
        "post": {
          "operationId": "SpecializationController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateSpecializationDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Create specialization",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Specialization"
                  }
                }
              }
            }
          },
          "tags": [
            "Specializations"
          ]
        },
        "get": {
          "operationId": "SpecializationController_findAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Get specialization",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Specialization"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Specializations"
          ]
        }
      },
      "/api/v1/specialization/stack": {
        "get": {
          "operationId": "SpecializationController_findAllWithStack",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Get specialization with stack",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ISpecializationWithStack"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Specializations"
          ]
        }
      },
      "/api/v1/specialization/{id}": {
        "get": {
          "operationId": "SpecializationController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get specialization",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Specialization"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Specializations"
          ]
        },
        "patch": {
          "operationId": "SpecializationController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSpecializationDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Update specialization",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Specialization"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Specializations"
          ]
        },
        "delete": {
          "operationId": "SpecializationController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "delete specialization"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Specializations"
          ]
        }
      },
      "/api/v1/specialization-stack": {
        "post": {
          "operationId": "SpecializationStackController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateSpecializationStackDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          }
        },
        "get": {
          "operationId": "SpecializationStackController_findAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/api/v1/specialization-stack/{id}": {
        "get": {
          "operationId": "SpecializationStackController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          }
        },
        "patch": {
          "operationId": "SpecializationStackController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSpecializationStackDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          }
        },
        "delete": {
          "operationId": "SpecializationStackController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      }
    },
    "info": {
      "title": "Baza Skill API example",
      "description": "Baza Skill API description",
      "version": "1.0",
      "contact": {}
    },
    "tags": [
      {
        "name": "BazaSkill",
        "description": ""
      }
    ],
    "servers": [],
    "components": {
      "schemas": {
        "CreateUserDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "password"
          ]
        },
        "IUser": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "access_token": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "email",
            "role",
            "access_token"
          ]
        },
        "Gallery": {
          "type": "object",
          "properties": {
            "image_url": {
              "type": "string",
              "description": "Url of the image"
            },
            "image_id": {
              "type": "string",
              "description": "cloudinary public id of the image"
            }
          },
          "required": [
            "image_url",
            "image_id"
          ]
        },
        "NotFoundResponse": {
          "type": "object",
          "properties": {
            "status_code": {
              "type": "number",
              "default": 404
            },
            "message": {
              "type": "string"
            }
          },
          "required": [
            "status_code",
            "message"
          ]
        },
        "CreateGalleryDto": {
          "type": "object",
          "properties": {
            "image_url": {
              "type": "string"
            },
            "image_id": {
              "type": "string"
            }
          },
          "required": [
            "image_url",
            "image_id"
          ]
        },
        "UploadImageResponse": {
          "type": "object",
          "properties": {
            "imageUrl": {
              "type": "string"
            }
          },
          "required": [
            "imageUrl"
          ]
        },
        "ForgotPasswordDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            }
          },
          "required": [
            "email"
          ]
        },
        "ResetPasswordDto": {
          "type": "object",
          "properties": {
            "token": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "token",
            "password"
          ]
        },
        "ChangePasswordDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "password"
          ]
        },
        "CreateTestimonialDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "review": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "review"
          ]
        },
        "Testimonial": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Reviewer`s name"
            },
            "review": {
              "type": "string",
              "description": "Review text"
            }
          },
          "required": [
            "name",
            "review"
          ]
        },
        "UpdateTestimonialDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "review": {
              "type": "string"
            }
          }
        },
        "CreateCounterDto": {
          "type": "object",
          "properties": {}
        },
        "Counter": {
          "type": "object",
          "properties": {
            "liveProject": {
              "type": "number",
              "description": "counter of live projects"
            },
            "members": {
              "type": "number",
              "description": "counter of members"
            },
            "employed": {
              "type": "number",
              "description": "counter of empoyed members"
            },
            "technologies": {
              "type": "number",
              "description": "counter of technologies"
            },
            "libraries": {
              "type": "number",
              "description": "counter of used libraries"
            }
          },
          "required": [
            "liveProject",
            "members",
            "employed",
            "technologies",
            "libraries"
          ]
        },
        "PostEntity": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "description": "Title of the post"
            },
            "content": {
              "type": "string",
              "description": "Content of the post"
            },
            "image_url": {
              "type": "string",
              "description": "Url of the image"
            },
            "image_id": {
              "type": "string",
              "description": "Cloudinary public id of the image"
            }
          },
          "required": [
            "title",
            "content",
            "image_url",
            "image_id"
          ]
        },
        "CreateStackDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            }
          },
          "required": [
            "title"
          ]
        },
        "UpdateStackDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            }
          }
        },
        "CreateSpecializationDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            }
          },
          "required": [
            "title"
          ]
        },
        "Specialization": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number"
            },
            "title": {
              "type": "string",
              "description": "Function which candidate execute on project such as PM or frontend etc"
            }
          },
          "required": [
            "id",
            "title"
          ]
        },
        "ISpecializationStack": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number"
            },
            "specialization_stack_id": {
              "type": "number"
            },
            "title": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "specialization_stack_id",
            "title"
          ]
        },
        "ISpecializationWithStack": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number"
            },
            "title": {
              "type": "number"
            },
            "stack": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ISpecializationStack"
              }
            }
          },
          "required": [
            "id",
            "title",
            "stack"
          ]
        },
        "UpdateSpecializationDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            }
          }
        },
        "Stack": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "description": "title of stack technology such as HTML/CSS"
            }
          },
          "required": [
            "title"
          ]
        },
        "CreateSpecializationStackDto": {
          "type": "object",
          "properties": {
            "stack_id": {
              "$ref": "#/components/schemas/Stack"
            },
            "specialization_id": {
              "$ref": "#/components/schemas/Specialization"
            }
          },
          "required": [
            "stack_id",
            "specialization_id"
          ]
        },
        "UpdateSpecializationStackDto": {
          "type": "object",
          "properties": {
            "stack_id": {
              "$ref": "#/components/schemas/Stack"
            },
            "specialization_id": {
              "$ref": "#/components/schemas/Specialization"
            }
          }
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
