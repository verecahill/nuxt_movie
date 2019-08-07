<template>
  <div>
    <b-container>
      <b-jumbotron>
        <template slot="header">Title of the Post</template>
  
        <template slot="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
          featured content or information.
        </template>

        <h6>Lst updated on XX</h6>
        <h6>Written by Someone</h6>
        <hr class="my-4" />

        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>

        <b-button variant="primary" href="#">Do Something</b-button>
        <b-button variant="success" href="#">Do Something Else</b-button>
      </b-jumbotron>
    </b-container>
  </div>
</template>
