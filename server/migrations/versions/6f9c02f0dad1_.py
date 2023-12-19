"""empty message

Revision ID: 6f9c02f0dad1
Revises: 
Create Date: 2023-12-18 15:33:27.775536

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6f9c02f0dad1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('car_images_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(), nullable=False),
    sa.Column('car_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=False),
    sa.Column('last_name', sa.String(), nullable=False),
    sa.Column('city', sa.String(), nullable=False),
    sa.Column('state', sa.String(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cars_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('year', sa.Integer(), nullable=False),
    sa.Column('make', sa.String(), nullable=False),
    sa.Column('model', sa.String(), nullable=False),
    sa.Column('body_style', sa.String(), nullable=False),
    sa.Column('body_color', sa.String(), nullable=False),
    sa.Column('total_miles', sa.Integer(), nullable=False),
    sa.Column('engine_horse_power', sa.Integer(), nullable=False),
    sa.Column('engine_torque', sa.Integer(), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users_table.id'], name=op.f('fk_cars_table_owner_id_users_table')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorite_cars_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('car_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['car_id'], ['cars_table.id'], name=op.f('fk_favorite_cars_table_car_id_cars_table')),
    sa.ForeignKeyConstraint(['user_id'], ['users_table.id'], name=op.f('fk_favorite_cars_table_user_id_users_table')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('for_sale_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('car_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['car_id'], ['cars_table.id'], name=op.f('fk_for_sale_table_car_id_cars_table')),
    sa.ForeignKeyConstraint(['owner_id'], ['users_table.id'], name=op.f('fk_for_sale_table_owner_id_users_table')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_cart_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('car_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['car_id'], ['cars_table.id'], name=op.f('fk_shopping_cart_table_car_id_cars_table')),
    sa.ForeignKeyConstraint(['user_id'], ['users_table.id'], name=op.f('fk_shopping_cart_table_user_id_users_table')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('shopping_cart_table')
    op.drop_table('for_sale_table')
    op.drop_table('favorite_cars_table')
    op.drop_table('cars_table')
    op.drop_table('users_table')
    op.drop_table('car_images_table')
    # ### end Alembic commands ###
